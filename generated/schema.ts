// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DepositToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DepositToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DepositToken", id.toString(), this);
    }
  }

  static load(id: string): DepositToken | null {
    return changetype<DepositToken | null>(store.get("DepositToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class WithdrawToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WithdrawToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WithdrawToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WithdrawToken", id.toString(), this);
    }
  }

  static load(id: string): WithdrawToken | null {
    return changetype<WithdrawToken | null>(store.get("WithdrawToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get withdrawAddress(): Bytes {
    let value = this.get("withdrawAddress");
    return value!.toBytes();
  }

  set withdrawAddress(value: Bytes) {
    this.set("withdrawAddress", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class GrantRewardTokenAmount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save GrantRewardTokenAmount entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GrantRewardTokenAmount must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GrantRewardTokenAmount", id.toString(), this);
    }
  }

  static load(id: string): GrantRewardTokenAmount | null {
    return changetype<GrantRewardTokenAmount | null>(
      store.get("GrantRewardTokenAmount", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get granter(): Bytes {
    let value = this.get("granter");
    return value!.toBytes();
  }

  set granter(value: Bytes) {
    this.set("granter", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class WithdrawManagerUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save WithdrawManagerUpdate entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WithdrawManagerUpdate must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WithdrawManagerUpdate", id.toString(), this);
    }
  }

  static load(id: string): WithdrawManagerUpdate | null {
    return changetype<WithdrawManagerUpdate | null>(
      store.get("WithdrawManagerUpdate", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get withdrawManager(): Bytes {
    let value = this.get("withdrawManager");
    return value!.toBytes();
  }

  set withdrawManager(value: Bytes) {
    this.set("withdrawManager", Value.fromBytes(value));
  }
}