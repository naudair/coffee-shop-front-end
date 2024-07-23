// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createOrder?: Maybe<Order>;
  createProduct?: Maybe<Product>;
  createUser?: Maybe<User>;
  loginUser?: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  fields?: InputMaybe<CategoryInput>;
};


export type MutationCreateOrderArgs = {
  fields?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  fields?: InputMaybe<ProductInput>;
};


export type MutationCreateUserArgs = {
  fields?: InputMaybe<UserInput>;
};


export type MutationLoginUserArgs = {
  fields?: InputMaybe<UserLoginInput>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  products: Array<Maybe<Products>>;
  promoCode?: Maybe<Scalars['String']['output']>;
  status: OrderStatus;
  user: Scalars['String']['output'];
};

export type OrderInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  products: Array<InputMaybe<ProductsInput>>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  status: OrderStatus;
  user: Scalars['String']['input'];
};

export enum OrderStatus {
  Delivered = 'delivered',
  InProgress = 'in_progress',
  OnTheWay = 'on_the_way',
  Placed = 'placed'
}

export type Price = {
  __typename?: 'Price';
  large?: Maybe<Scalars['Float']['output']>;
  medium?: Maybe<Scalars['Float']['output']>;
  small?: Maybe<Scalars['Float']['output']>;
};

export type PriceInput = {
  large?: InputMaybe<Scalars['Float']['input']>;
  medium?: InputMaybe<Scalars['Float']['input']>;
  small?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
};

export type ProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceInput>;
};

export enum ProductSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type Products = {
  __typename?: 'Products';
  milkAmount: Scalars['Int']['output'];
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  size: ProductSize;
};

export type ProductsInput = {
  milkAmount: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  size: ProductSize;
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Category>>;
  getOrders?: Maybe<Array<Order>>;
  getProducts?: Maybe<Array<Product>>;
  getUsers?: Maybe<Array<User>>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserMutationVariables = Exact<{
  fields?: InputMaybe<UserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', _id: string, userName?: string | null, email?: string | null, password?: string | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: Array<{ __typename?: 'User', _id: string, userName?: string | null, email?: string | null, password?: string | null }> | null };

export type LoginUserMutationVariables = Exact<{
  loginUserFields2?: InputMaybe<UserLoginInput>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'User', _id: string, userName?: string | null, email?: string | null, password?: string | null } | null };

export type CreateProductMutationVariables = Exact<{
  fields?: InputMaybe<ProductInput>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', _id: string, imgUrl?: string | null, name?: string | null, description?: string | null, category?: string | null, price?: { __typename?: 'Price', small?: number | null, medium?: number | null, large?: number | null } | null } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getProducts?: Array<{ __typename?: 'Product', _id: string, imgUrl?: string | null, name?: string | null, description?: string | null, category?: string | null, price?: { __typename?: 'Price', small?: number | null, medium?: number | null, large?: number | null } | null }> | null };


export const CreateUserDocument = gql`
    mutation CreateUser($fields: UserInput) {
  createUser(fields: $fields) {
    _id
    userName
    email
    password
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    _id
    userName
    email
    password
  }
}
    `;
export type GetUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUsersQuery, GetUsersQueryVariables>
    } & TChildProps;
export function withGetUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUsersQuery, GetUsersQueryVariables, GetUsersProps<TChildProps, TDataName>>(GetUsersDocument, {
      alias: 'getUsers',
      ...operationOptions
    });
};

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($loginUserFields2: UserLoginInput) {
  loginUser(fields: $loginUserFields2) {
    _id
    userName
    email
    password
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>
    } & TChildProps;
export function withLoginUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps, TDataName>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginUserFields2: // value for 'loginUserFields2'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($fields: ProductInput) {
  createProduct(fields: $fields) {
    _id
    imgUrl
    name
    price {
      small
      medium
      large
    }
    description
    category
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;
export type CreateProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>
    } & TChildProps;
export function withCreateProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductMutation,
  CreateProductMutationVariables,
  CreateProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductMutation, CreateProductMutationVariables, CreateProductProps<TChildProps, TDataName>>(CreateProductDocument, {
      alias: 'createProduct',
      ...operationOptions
    });
};

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  getProducts {
    _id
    imgUrl
    name
    price {
      small
      medium
      large
    }
    description
    category
  }
}
    `;
export type GetProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductsQuery, GetProductsQueryVariables>
    } & TChildProps;
export function withGetProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductsQuery,
  GetProductsQueryVariables,
  GetProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductsQuery, GetProductsQueryVariables, GetProductsProps<TChildProps, TDataName>>(GetProductsDocument, {
      alias: 'getProducts',
      ...operationOptions
    });
};

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export function useGetProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;