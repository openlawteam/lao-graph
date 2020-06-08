import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  SummonComplete,
  SubmitProposal,
  SponsorProposal,
  SubmitVote,
  ProcessProposal,
  ProcessWhitelistProposal,
  ProcessGuildKickProposal,
  Ragequit,
  TokensCollected,
  CancelProposal,
  UpdateDelegateKey,
  Withdraw,
  OwnershipTransferred
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleSummonComplete(event: SummonComplete): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.summoner = event.params.summoner
  entity.tokens = event.params.tokens

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.proposals(...)
  // - contract.processingReward(...)
  // - contract.getMemberProposalVote(...)
  // - contract.getCurrentPeriod(...)
  // - contract.members(...)
  // - contract.submitGuildKickProposal(...)
  // - contract.approvedTokens(...)
  // - contract.TOTAL(...)
  // - contract.totalShares(...)
  // - contract.proposalQueue(...)
  // - contract.proposedToKick(...)
  // - contract.memberAddressByDelegateKey(...)
  // - contract.userTokenBalances(...)
  // - contract.submitProposal(...)
  // - contract.totalLoot(...)
  // - contract.gracePeriodLength(...)
  // - contract.getUserTokenBalance(...)
  // - contract.tokenWhitelist(...)
  // - contract.getTokenCount(...)
  // - contract.getProposalQueueLength(...)
  // - contract.summoningTime(...)
  // - contract.votingPeriodLength(...)
  // - contract.proposalDeposit(...)
  // - contract.owner(...)
  // - contract.isOwner(...)
  // - contract.hasVotingPeriodExpired(...)
  // - contract.totalGuildBankTokens(...)
  // - contract.canRagequit(...)
  // - contract.dilutionBound(...)
  // - contract.getProposalFlags(...)
  // - contract.periodDuration(...)
  // - contract.depositToken(...)
  // - contract.laoFundAddress(...)
  // - contract.proposalCount(...)
  // - contract.lastPaymentTime(...)
  // - contract.proposedToWhitelist(...)
  // - contract.ESCROW(...)
  // - contract.GUILD(...)
  // - contract.adminFeeDenominator(...)
  // - contract.submitWhitelistProposal(...)
}

export function handleSubmitProposal(event: SubmitProposal): void {}

export function handleSponsorProposal(event: SponsorProposal): void {}

export function handleSubmitVote(event: SubmitVote): void {}

export function handleProcessProposal(event: ProcessProposal): void {}

export function handleProcessWhitelistProposal(
  event: ProcessWhitelistProposal
): void {}

export function handleProcessGuildKickProposal(
  event: ProcessGuildKickProposal
): void {}

export function handleRagequit(event: Ragequit): void {}

export function handleTokensCollected(event: TokensCollected): void {}

export function handleCancelProposal(event: CancelProposal): void {}

export function handleUpdateDelegateKey(event: UpdateDelegateKey): void {}

export function handleWithdraw(event: Withdraw): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
