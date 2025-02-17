/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace RLBTRFLY {
  export type LockedBalanceStruct = {
    amount: PromiseOrValue<BigNumberish>;
    unlockTime: PromiseOrValue<BigNumberish>;
  };

  export type LockedBalanceStructOutput = [BigNumber, number] & {
    amount: BigNumber;
    unlockTime: number;
  };
}

export interface RedactedRevenueLockInterface extends utils.Interface {
  functions: {
    'EPOCH_DURATION()': FunctionFragment;
    'LOCK_DURATION()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'balances(address)': FunctionFragment;
    'btrflyV2()': FunctionFragment;
    'decimals()': FunctionFragment;
    'getCurrentEpoch()': FunctionFragment;
    'isShutdown()': FunctionFragment;
    'lock(address,uint256)': FunctionFragment;
    'lockedBalanceOf(address)': FunctionFragment;
    'lockedBalances(address)': FunctionFragment;
    'lockedSupply()': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingLockOf(address)': FunctionFragment;
    'processExpiredLocks(bool)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'shutdown()': FunctionFragment;
    'symbol()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'withdrawExpiredLocksTo(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'EPOCH_DURATION'
      | 'LOCK_DURATION'
      | 'balanceOf'
      | 'balances'
      | 'btrflyV2'
      | 'decimals'
      | 'getCurrentEpoch'
      | 'isShutdown'
      | 'lock'
      | 'lockedBalanceOf'
      | 'lockedBalances'
      | 'lockedSupply'
      | 'name'
      | 'owner'
      | 'pendingLockOf'
      | 'processExpiredLocks'
      | 'renounceOwnership'
      | 'shutdown'
      | 'symbol'
      | 'transferOwnership'
      | 'withdrawExpiredLocksTo',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'EPOCH_DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'LOCK_DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'balances', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'btrflyV2', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCurrentEpoch', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isShutdown', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lock', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'lockedBalanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'lockedBalances', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'lockedSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingLockOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'processExpiredLocks', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'shutdown', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'withdrawExpiredLocksTo', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'EPOCH_DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'LOCK_DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'btrflyV2', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentEpoch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isShutdown', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lockedBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lockedBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lockedSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingLockOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'processExpiredLocks', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'shutdown', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawExpiredLocksTo', data: BytesLike): Result;

  events: {
    'Locked(address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Shutdown()': EventFragment;
    'Withdrawn(address,uint256,bool)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Locked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Shutdown'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export interface LockedEventObject {
  account: string;
  epoch: BigNumber;
  amount: BigNumber;
}
export type LockedEvent = TypedEvent<[string, BigNumber, BigNumber], LockedEventObject>;

export type LockedEventFilter = TypedEventFilter<LockedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface ShutdownEventObject {}
export type ShutdownEvent = TypedEvent<[], ShutdownEventObject>;

export type ShutdownEventFilter = TypedEventFilter<ShutdownEvent>;

export interface WithdrawnEventObject {
  account: string;
  amount: BigNumber;
  relock: boolean;
}
export type WithdrawnEvent = TypedEvent<[string, BigNumber, boolean], WithdrawnEventObject>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface RedactedRevenueLock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RedactedRevenueLockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    EPOCH_DURATION(overrides?: CallOverrides): Promise<[number]>;

    LOCK_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & { amount: BigNumber }>;

    balances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, number] & { locked: BigNumber; nextUnlockIndex: number }>;

    btrflyV2(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    isShutdown(overrides?: CallOverrides): Promise<[boolean]>;

    lock(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    lockedBalanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    lockedBalances(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, RLBTRFLY.LockedBalanceStructOutput[]] & {
        total: BigNumber;
        unlockable: BigNumber;
        locked: BigNumber;
        lockData: RLBTRFLY.LockedBalanceStructOutput[];
      }
    >;

    lockedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingLockOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    processExpiredLocks(
      relock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawExpiredLocksTo(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  EPOCH_DURATION(overrides?: CallOverrides): Promise<number>;

  LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  balances(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, number] & { locked: BigNumber; nextUnlockIndex: number }>;

  btrflyV2(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  isShutdown(overrides?: CallOverrides): Promise<boolean>;

  lock(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  lockedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  lockedBalances(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, RLBTRFLY.LockedBalanceStructOutput[]] & {
      total: BigNumber;
      unlockable: BigNumber;
      locked: BigNumber;
      lockData: RLBTRFLY.LockedBalanceStructOutput[];
    }
  >;

  lockedSupply(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingLockOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  processExpiredLocks(
    relock: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawExpiredLocksTo(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    EPOCH_DURATION(overrides?: CallOverrides): Promise<number>;

    LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    balances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, number] & { locked: BigNumber; nextUnlockIndex: number }>;

    btrflyV2(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    isShutdown(overrides?: CallOverrides): Promise<boolean>;

    lock(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    lockedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    lockedBalances(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, RLBTRFLY.LockedBalanceStructOutput[]] & {
        total: BigNumber;
        unlockable: BigNumber;
        locked: BigNumber;
        lockData: RLBTRFLY.LockedBalanceStructOutput[];
      }
    >;

    lockedSupply(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingLockOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    processExpiredLocks(relock: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    shutdown(overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    withdrawExpiredLocksTo(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Locked(address,uint256,uint256)'(
      account?: PromiseOrValue<string> | null,
      epoch?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): LockedEventFilter;
    Locked(
      account?: PromiseOrValue<string> | null,
      epoch?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): LockedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Shutdown()'(): ShutdownEventFilter;
    Shutdown(): ShutdownEventFilter;

    'Withdrawn(address,uint256,bool)'(
      account?: PromiseOrValue<string> | null,
      amount?: null,
      relock?: null,
    ): WithdrawnEventFilter;
    Withdrawn(account?: PromiseOrValue<string> | null, amount?: null, relock?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    EPOCH_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    btrflyV2(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    isShutdown(overrides?: CallOverrides): Promise<BigNumber>;

    lock(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    lockedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    lockedBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    lockedSupply(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingLockOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    processExpiredLocks(
      relock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawExpiredLocksTo(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EPOCH_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    btrflyV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lock(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    lockedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockedBalances(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingLockOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processExpiredLocks(
      relock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawExpiredLocksTo(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
