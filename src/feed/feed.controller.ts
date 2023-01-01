import { DeleteResult, UpdateResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { FeedService } from './feed.service';
import { FeedPost } from './models/posts.interface';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  createPost(@Body() feed: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feed);
  }

  @Get()
  findAllPosts(@Query('start') start = 0): Observable<FeedPost[]> {
    return this.feedService.findAllPosts(start);
  }

  @Put(':id')
  updatePost(
    @Param('id') id: number,
    @Body() feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
