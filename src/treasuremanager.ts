import  {
    DepositToken as NewDepositToken,
    WithdrawToken as NewWithdrawToken,
    GrantRewardTokenAmount as NewGrantRewardTokenAmount,
    WithdrawManagerUpdate as NewWithdrawManagerUpdate
}  from '../generated/TreasureManager/TreasureManager'
import { DepositToken, WithdrawToken, GrantRewardTokenAmount,WithdrawManagerUpdate } from '../generated/schema'
import { crypto , log } from '@graphprotocol/graph-ts'

export function handleDepositToken(event: NewDepositToken): void {
    log.info('start handleDepositToken', [])
    let eventId = event.params.sender.toHex();
    let depositToken = new DepositToken(eventId);
    depositToken.tokenAddress = event.params.tokenAddress;
    depositToken.sender = event.params.sender;
    depositToken.amount = event.params.amount;
    depositToken.save()
    log.info('end handleDepositToken', [])
}

export function handleWithdrawToken(event: NewWithdrawToken): void {
    log.info('start handleWithdrawToken', [])
    let eventId = event.params.withdrawAddress.toHex();
    let withdrawToken = new WithdrawToken(eventId);
    withdrawToken.tokenAddress = event.params.tokenAddress;
    withdrawToken.withdrawAddress = event.params.withdrawAddress;
    withdrawToken.amount = event.params.amount;
    withdrawToken.save()
    log.info('end handleWithdrawToken', [])
}

export function handleGrantRewardTokenAmount(event: NewGrantRewardTokenAmount): void {
    log.info('start handleGrantRewardTokenAmount', [])
    let eventId = event.params.granter.toHex();
    let grantRewardsEvent = new GrantRewardTokenAmount(eventId)
    grantRewardsEvent.amount = event.params.amount;
    grantRewardsEvent.tokenAddress = event.params.tokenAddress;
    grantRewardsEvent.granter = event.params.granter;
    grantRewardsEvent.save();
    log.info('end handleGrantRewardTokenAmount', [])
}

export function handleWithdrawManagerUpdate(event: NewWithdrawManagerUpdate): void {
    log.info('start handleWithdrawManagerUpdate', [])
    let eventId = event.params.withdrawManager.toHex();
    let withdrawManagerUpdate = new WithdrawManagerUpdate(eventId)
    withdrawManagerUpdate.withdrawManager = event.params.withdrawManager
    withdrawManagerUpdate.save();
    log.info('end handleWithdrawManagerUpdate', [])
}
