/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ShoppingCartItemInput: { // input type
    productSKU: string; // String!
  }
}

export interface NexusGenEnums {
  ProductPromoType: "DISCOUNT" | "FREE_PRODUCT"
  UpdateCartAction: "ADD" | "REMOVE"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Product: { // root type
    name?: string | null; // String
    price?: number | null; // Float
    sku?: string | null; // ID
    stock?: number | null; // Int
  }
  ProductPromo: { // root type
    discountRate?: number | null; // Float
    freeProductSKU?: string | null; // String
    minBuyQty?: number | null; // Int
    productSKU?: string | null; // String
    type?: NexusGenEnums['ProductPromoType'] | null; // ProductPromoType
  }
  Query: {};
  Sales: { // root type
    salesItems?: Array<NexusGenRootTypes['SalesItem'] | null> | null; // [SalesItem]
    totalBill?: number | null; // Float
  }
  SalesItem: { // root type
    discountRate?: number | null; // Float
    finalPrice?: number | null; // Float
    productName?: string | null; // String
    productPrice?: number | null; // Float
    productSKU?: string | null; // String
    withPromo?: NexusGenEnums['ProductPromoType'] | null; // ProductPromoType
  }
  ShoppingCartItem: { // root type
    productSKU?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    makeSalesMutation: NexusGenRootTypes['Sales']; // Sales!
    updateCartItems: Array<NexusGenRootTypes['ShoppingCartItem'] | null>; // [ShoppingCartItem]!
  }
  Product: { // field return type
    name: string | null; // String
    price: number | null; // Float
    sku: string | null; // ID
    stock: number | null; // Int
  }
  ProductPromo: { // field return type
    discountRate: number | null; // Float
    freeProductSKU: string | null; // String
    minBuyQty: number | null; // Int
    productSKU: string | null; // String
    type: NexusGenEnums['ProductPromoType'] | null; // ProductPromoType
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Sales: { // field return type
    salesItems: Array<NexusGenRootTypes['SalesItem'] | null> | null; // [SalesItem]
    totalBill: number | null; // Float
  }
  SalesItem: { // field return type
    discountRate: number | null; // Float
    finalPrice: number | null; // Float
    productName: string | null; // String
    productPrice: number | null; // Float
    productSKU: string | null; // String
    withPromo: NexusGenEnums['ProductPromoType'] | null; // ProductPromoType
  }
  ShoppingCartItem: { // field return type
    productSKU: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    makeSalesMutation: 'Sales'
    updateCartItems: 'ShoppingCartItem'
  }
  Product: { // field return type name
    name: 'String'
    price: 'Float'
    sku: 'ID'
    stock: 'Int'
  }
  ProductPromo: { // field return type name
    discountRate: 'Float'
    freeProductSKU: 'String'
    minBuyQty: 'Int'
    productSKU: 'String'
    type: 'ProductPromoType'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Sales: { // field return type name
    salesItems: 'SalesItem'
    totalBill: 'Float'
  }
  SalesItem: { // field return type name
    discountRate: 'Float'
    finalPrice: 'Float'
    productName: 'String'
    productPrice: 'Float'
    productSKU: 'String'
    withPromo: 'ProductPromoType'
  }
  ShoppingCartItem: { // field return type name
    productSKU: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    makeSalesMutation: { // args
      params: NexusGenInputs['ShoppingCartItemInput'][]; // [ShoppingCartItemInput!]!
    }
    updateCartItems: { // args
      action: NexusGenEnums['UpdateCartAction']; // UpdateCartAction!
      productSKU: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}