import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { PmMaterialModule } from "./material-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditDetailsComponent } from "./profile/edit-details/edit-details.component";
import { LikeButtonComponent } from "./scream/like-button/like-button.component";
import { ConfirmationDialogComponent } from "./scream/confirmation-dialog/confirmation-dialog.component";
import { PostScreamComponent } from "./scream/post-scream/post-scream.component";
import { ScreamDialogComponent } from "./scream/scream-dialog/scream-dialog.component";
import { CommentsComponent } from "./scream/comments/comments.component";
import { CommentFormComponent } from "./scream/comment-form/comment-form.component";
import { NotificationsComponent } from './notification/notifications/notifications.component';
import { ScreamSkeletonComponent } from './scream/scream-skeleton/scream-skeleton.component';
import { ProfileSkeletonComponent } from './profile/profile-skeleton/profile-skeleton.component';

@NgModule({
  declarations: [
    EditDetailsComponent,
    LikeButtonComponent,
    ConfirmationDialogComponent,
    PostScreamComponent,
    ScreamDialogComponent,
    CommentsComponent,
    CommentFormComponent,
    NotificationsComponent,
    ScreamSkeletonComponent,
    ProfileSkeletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PmMaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [
    PmMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    EditDetailsComponent,
    LikeButtonComponent,
    ConfirmationDialogComponent,
    PostScreamComponent,
    ScreamDialogComponent,
    CommentsComponent,
    CommentFormComponent,
    NotificationsComponent
  ],
  entryComponents: [
    EditDetailsComponent,
    ConfirmationDialogComponent,
    PostScreamComponent,
    ScreamDialogComponent,
  ],
})
export class SharedModule {}
