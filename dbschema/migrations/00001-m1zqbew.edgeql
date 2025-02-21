CREATE MIGRATION m1zqbewic4j3ppoaqtidhzv7hiwjuc6wyvucjxki67l7bunzxzrhra
    ONTO initial
{
  CREATE TYPE default::ClickCount {
      CREATE REQUIRED PROPERTY clicks: std::int32;
  };
};
