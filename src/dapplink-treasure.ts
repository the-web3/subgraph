import { BigInt, Address, ethereum, Bytes, ByteArray } from "@graphprotocol/graph-ts";
import { DepositETHCall } from '../generated/TreasureManager/TreasureManager'
import { DepositToken, WithdrawToken, GrantRewardTokenAmount,WithdrawManagerUpdate } from '../generated/schema'
import { crypto , log } from '@graphprotocol/graph-ts'

export function handleDepositToken(event: DepositToken): void {
    log.info("handleInitDataStore",[])
}

export function handleWithdrawToken(event: WithdrawToken): void {
    log.info("handleWithdrawToken",[])
}

export function handleGrantRewardTokenAmount(event: GrantRewardTokenAmount): void {
    log.info("handleGrantRewardTokenAmount",[])
}

export function handleWithdrawManagerUpdate(event: WithdrawManagerUpdate): void {
    log.info("handleWithdrawManagerUpdate",[])
}


