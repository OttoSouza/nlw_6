import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4} from "uuid"
import {Exclude} from "class-transformer"
@Entity("users")
export class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id){
      this.id = v4();
    }
  }
}
