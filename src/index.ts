import { BatchCompleted } from './../generated/BatchCompleted/ProofAuctionMarketABI';
import { BatchCompletedEntity, BatchCompletedCountEntity } from '../generated/schema';
import { BigInt } from '@graphprotocol/graph-ts';

export function handleBatchCompleted(event: BatchCompleted): void {
  let entity = new BatchCompletedEntity(event.params.blockStartAt.toString());
  entity.networkId = event.params.networkId;
  entity.batchId = event.params.batchId;
  entity.bidder = event.params.bidder;
  entity.blockStartAt = event.params.blockStartAt;
  entity.blockEndAt = event.params.blockEndAt;
  entity.rewards = event.params.rewards;
  entity.timestamp = event.block.timestamp.toU64();
  entity.transactionHash = event.transaction.hash;
  entity.save();

  let countEntity = BatchCompletedCountEntity.load("BatchCompletedCountEntity");
  if (!countEntity) {
    countEntity = new BatchCompletedCountEntity("BatchCompletedCountEntity");
    countEntity.timestamp = event.block.timestamp.toU64();
    countEntity.totalCount = BigInt.fromI32(1);
    countEntity.totalRewards = event.params.rewards;
  } else {
    countEntity.timestamp = event.block.timestamp.toU64();
    countEntity.totalCount = countEntity.totalCount.plus(BigInt.fromI32(1));
    countEntity.totalRewards = countEntity.totalRewards.plus(event.params.rewards);
  }

  countEntity.save();
}
