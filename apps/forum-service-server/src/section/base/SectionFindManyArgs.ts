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
import { SectionWhereInput } from "./SectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SectionOrderByInput } from "./SectionOrderByInput";

@ArgsType()
class SectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SectionWhereInput, { nullable: true })
  @Type(() => SectionWhereInput)
  where?: SectionWhereInput;

  @ApiProperty({
    required: false,
    type: [SectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SectionOrderByInput], { nullable: true })
  @Type(() => SectionOrderByInput)
  orderBy?: Array<SectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SectionFindManyArgs as SectionFindManyArgs };
