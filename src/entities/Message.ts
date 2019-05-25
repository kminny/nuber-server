import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  Column
} from "typeorm";

import Chat from "./Chat";
import User from "./User";

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  text: string;

  @Column({ nullable: true })
  chatId: number;

  // Many messages has one chat
  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat;

  @ManyToOne(type => User, user => user.messages)
  user: User;

  @Column({ nullable: true })
  userId: number;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Message;
