import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Timestamp: any;
  UUID: any;
};

export type Concept = GloballyIdentifiable & ListDisplayable & Taggable & {
  __typename?: 'Concept';
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  notations: Array<Notation>;
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type GloballyIdentifiable = {
  uuid?: Maybe<Scalars['UUID']>;
};

export type Identity = GloballyIdentifiable & ListDisplayable & {
  __typename?: 'Identity';
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type Journal = GloballyIdentifiable & ListDisplayable & Taggable & {
  __typename?: 'Journal';
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  entries: Array<JournalEntry>;
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type JournalEntry = GloballyIdentifiable & Taggable & {
  __typename?: 'JournalEntry';
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type ListDisplayable = {
  caption: Scalars['String'];
  title: Scalars['String'];
};

export type Notatable = {
  notations: Array<Notation>;
};

export type Notation = GloballyIdentifiable & Taggable & {
  __typename?: 'Notation';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  format: NotationFormat;
  kind: NotationKind;
  tags: Array<Tag>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export enum NotationFormat {
  Creole = 'CREOLE',
  Plaintext = 'PLAINTEXT'
}

export enum NotationKind {
  Bibliography = 'BIBLIOGRAPHY',
  Inline = 'INLINE',
  Url = 'URL'
}

export type Organization = GloballyIdentifiable & ListDisplayable & Taggable & {
  __typename?: 'Organization';
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  inception?: Maybe<Scalars['Timestamp']>;
  notations: Array<Notation>;
  tags: Array<Tag>;
  termination?: Maybe<Scalars['Timestamp']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type Person = GloballyIdentifiable & ListDisplayable & Taggable & {
  __typename?: 'Person';
  birth?: Maybe<Scalars['Timestamp']>;
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  death?: Maybe<Scalars['Timestamp']>;
  notations: Array<Notation>;
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type Query = {
  __typename?: 'Query';
  dummy?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
};

export type Taggable = {
  tags: Array<Tag>;
};

export type FakeQueryQueryVariables = Exact<{
  input?: InputMaybe<Scalars['String']>;
}>;


export type FakeQueryQuery = { __typename: 'Query' };


export const FakeQueryDocument = gql`
    query FakeQuery($input: String) {
  __typename
}
    `;

/**
 * __useFakeQueryQuery__
 *
 * To run a query within a React component, call `useFakeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFakeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFakeQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFakeQueryQuery(baseOptions?: Apollo.QueryHookOptions<FakeQueryQuery, FakeQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FakeQueryQuery, FakeQueryQueryVariables>(FakeQueryDocument, options);
      }
export function useFakeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FakeQueryQuery, FakeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FakeQueryQuery, FakeQueryQueryVariables>(FakeQueryDocument, options);
        }
export type FakeQueryQueryHookResult = ReturnType<typeof useFakeQueryQuery>;
export type FakeQueryLazyQueryHookResult = ReturnType<typeof useFakeQueryLazyQuery>;
export type FakeQueryQueryResult = Apollo.QueryResult<FakeQueryQuery, FakeQueryQueryVariables>;