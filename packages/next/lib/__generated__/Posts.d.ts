/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_articles_data_attributes_category_data_attributes_articles_data_attributes {
    __typename: 'Article';
    title: string;
    slug: string;
}

export interface Posts_articles_data_attributes_category_data_attributes_articles_data {
    __typename: 'ArticleEntity';
    attributes: Posts_articles_data_attributes_category_data_attributes_articles_data_attributes | null;
}

export interface Posts_articles_data_attributes_category_data_attributes_articles {
    __typename: 'ArticleRelationResponseCollection';
    data: Posts_articles_data_attributes_category_data_attributes_articles_data[];
}

export interface Posts_articles_data_attributes_category_data_attributes {
    __typename: 'Category';
    createdAt: any | null;
    name: string;
    articles: Posts_articles_data_attributes_category_data_attributes_articles | null;
}

export interface Posts_articles_data_attributes_category_data {
    __typename: 'CategoryEntity';
    id: string | null;
    attributes: Posts_articles_data_attributes_category_data_attributes | null;
}

export interface Posts_articles_data_attributes_category {
    __typename: 'CategoryEntityResponse';
    data: Posts_articles_data_attributes_category_data | null;
}

export interface Posts_articles_data_attributes {
    __typename: 'Article';
    content: string;
    createdAt: any | null;
    description: string;
    slug: string;
    title: string;
    category: Posts_articles_data_attributes_category | null;
}

export interface Posts_articles_data {
    __typename: 'ArticleEntity';
    id: string | null;
    attributes: Posts_articles_data_attributes | null;
}

export interface Posts_articles {
    __typename: 'ArticleEntityResponseCollection';
    data: Posts_articles_data[];
}

export interface Posts {
    articles: Posts_articles | null;
}

export interface PostsVariables {
    slug?: string | null;
}
