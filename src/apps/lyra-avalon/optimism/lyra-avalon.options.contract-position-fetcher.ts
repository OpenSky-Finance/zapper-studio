import { Inject } from '@nestjs/common';
import _ from 'lodash';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { getAppImg } from '~app-toolkit/helpers/presentation/image.present';
import { ContractType } from '~position/contract.interface';
import { DefaultDataProps } from '~position/display.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { supplied } from '~position/position.utils';
import { Network } from '~types/network.interface';

import { LYRA_AVALON_DEFINITION } from '../lyra-avalon.definition';

import { OPTION_TYPES } from './helpers/consts';
import { getOptions } from './helpers/graph';

const appId = LYRA_AVALON_DEFINITION.id;
const groupId = LYRA_AVALON_DEFINITION.groups.options.id;
const network = Network.OPTIMISM_MAINNET;

export interface LyraAvalonOptionContractPositionDataProps extends DefaultDataProps {
  optionType: number;
  strikeId: number;
  marketAddress: string;
  quoteAddress: string;
  tokenAddress: string;
  callPrice: number;
  putPrice: number;
}

@Register.ContractPositionFetcher({ appId, groupId, network })
export class OptimismLyraAvalonOptionsContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(@Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit) {}

  async getPositions() {
    const baseTokens = await this.appToolkit.getBaseTokenPrices(network);
    const response = await getOptions(this.appToolkit.helpers.theGraphHelper);

    const markets = response.markets.map(market => {
      const quoteToken = baseTokens.find(t => t.address === market.quoteAddress.toLowerCase())!;
      const baseToken = baseTokens.find(t => t.address === market.baseAddress.toLowerCase())!;
      if (!quoteToken || !baseToken) return null;

      const boards = market.boards.map(board => {
        const strikes = board.strikes.map(strike => {
          const position = {
            type: ContractType.POSITION,
            appId,
            groupId,
            address: market.optionToken.id.toLowerCase(),
            network,
            displayProps: {
              images: [getAppImg(appId)],
            },
            dataProps: {},
          };

          const positions = _.keys(OPTION_TYPES).map(key => {
            return {
              ...position,
              tokens: Number(key) === 2 ? [supplied(baseToken), quoteToken] : [baseToken, supplied(quoteToken)],
              dataProps: {
                strikeId: Number(strike.strikeId),
                optionType: Number(key),
                marketAddress: market.id,
                quoteAddress: market.quoteAddress,
                tokenAddress: market.optionToken.id,
                callPrice: Number(strike.callOption.latestOptionPriceAndGreeks.optionPrice),
                putPrice: Number(strike.putOption.latestOptionPriceAndGreeks.optionPrice),
              },
              displayProps: {
                ...position.displayProps,
                label: `${OPTION_TYPES[key]} ${baseToken.symbol} @ $${strike.strikePriceReadable}`,
              },
            } as ContractPosition<LyraAvalonOptionContractPositionDataProps>;
          });

          const positionsWithKey = positions.map(p => ({
            key: this.appToolkit.getPositionKey(p, ['optionType', 'strikeId']),
            ...p,
          }));

          return positionsWithKey;
        });
        return _.flatten(strikes);
      });
      return _.flatten(boards);
    });
    return _.compact(_.flatten(markets));
  }
}
