import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { projectController } from './project.controller';
import { Project, projectSchema } from 'src/schemas/project.schema';
import { projectService } from './project.service';
import { Team, TeamSchema } from '../../schemas/team.schema';
import { UserSchema } from '../../schemas/user.schema';
import { TaskSchema } from '../../schemas/task.schema';
import { TeamService } from '../team-module/team.service';
import { ChatMessage, ChatMessageSchema } from "../../schemas/ChatMessage.schema";
import { Notification, NotificationSchema } from '../../schemas/notification.schema';
import { NotificationService } from "../notification/notification.service"; // Adjust the path based on your project structure

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Team.name, schema: TeamSchema },
      { name: 'User', schema: UserSchema },
      { name: Project.name, schema: projectSchema },
      { name: 'Task', schema: TaskSchema },
      { name: ChatMessage.name, schema: ChatMessageSchema },
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  providers: [projectService, TeamService, NotificationService],
  controllers: [projectController],
})
export class ProjectModule {}
