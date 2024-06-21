/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PersonalDetailsWhereUniqueInput } from "./PersonalDetailsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PersonalDetailsUpdateInput } from "./PersonalDetailsUpdateInput";

@ArgsType()
class UpdatePersonalDetailsArgs {
  @ApiProperty({
    required: true,
    type: () => PersonalDetailsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonalDetailsWhereUniqueInput)
  @Field(() => PersonalDetailsWhereUniqueInput, { nullable: false })
  where!: PersonalDetailsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PersonalDetailsUpdateInput,
  })
  @ValidateNested()
  @Type(() => PersonalDetailsUpdateInput)
  @Field(() => PersonalDetailsUpdateInput, { nullable: false })
  data!: PersonalDetailsUpdateInput;
}

export { UpdatePersonalDetailsArgs as UpdatePersonalDetailsArgs };
