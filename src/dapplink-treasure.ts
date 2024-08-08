import { BigInt, Address, ethereum, Bytes, ByteArray } from "@graphprotocol/graph-ts";
import { DepositETHCall } from '../generated/TreasureManager/TreasureManager'
import { DepositToken, WithdrawToken, GrantRewardTokenAmount,WithdrawManagerUpdate } from '../generated/schema'
import { crypto , log } from '@graphprotocol/graph-ts'

export function handleDepositToken(event: DepositToken): void {
    log.debug('handleInitDataStore', [])
    let eventId = event.id;
    let depositToken = new DepositToken(eventId);
    depositToken.tokenAddress = event.tokenAddress;
    depositToken.sender = event.sender;
    depositToken.amount = event.amount;
    depositToken.save()
}

export function handleWithdrawToken(event: WithdrawToken): void {
    log.debug('handleWithdrawToken', [])
    let eventId = event.id;
    let withdrawToken = new WithdrawToken(eventId);
    withdrawToken.tokenAddress = event.tokenAddress;
    withdrawToken.withdrawAddress = event.withdrawAddress;
    withdrawToken.amount = event.amount;
    withdrawToken.save()
}

export function handleGrantRewardTokenAmount(event: GrantRewardTokenAmount): void {
    log.debug('handleGrantRewardTokenAmount', [])
    let grantRewardsEvent = new GrantRewardTokenAmount(event.id)
    grantRewardsEvent.amount = event.amount;
    grantRewardsEvent.tokenAddress = event.tokenAddress;
    grantRewardsEvent.granter = event.granter;
    grantRewardsEvent.save();
}

export function handleWithdrawManagerUpdate(event: WithdrawManagerUpdate): void {
    log.debug('handleWithdrawManagerUpdate', [])
    let withdrawManagerUpdate = new WithdrawManagerUpdate(event.id)
    withdrawManagerUpdate.withdrawManager = withdrawManagerUpdate.withdrawManager
    withdrawManagerUpdate.save();
}

