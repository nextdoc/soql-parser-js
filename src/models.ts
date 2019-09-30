import { LiteralType, HavingCondition } from './api/api-models';
import { IToken, CstNode } from 'chevrotain';

export type LiteralTypeWithSubquery = (LiteralType | 'SUBQUERY') | LiteralType[];

export type HavingConditionWithDateLiteralVar = HavingCondition & { dateLiteralVariable: string };

export interface ArrayExpressionWithType {
  type: string;
  value: string;
}

export interface ExpressionTree<T> {
  expressionTree?: T;
  prevExpression?: T;
}

/**
 * CONTEXT TYPES
 */

interface WithIdentifier {
  Identifier?: IToken[];
}

export interface SelectStatementContext {
  selectClause: CstNode[];
  fromClause: CstNode[];
  whereClause?: CstNode[];
  withClause?: CstNode[];
  groupByClause?: CstNode[];
  orderByClause?: CstNode[];
  limitClause?: CstNode[];
  offsetClause?: CstNode[];
  forViewOrReference?: CstNode[];
  updateTrackingViewstat?: CstNode[];
}

export interface SelectClauseIdentifierContext extends WithIdentifier {
  alias?: IToken[];
}

export interface SelectClauseFunctionIdentifierContext extends WithIdentifier {}

export interface SelectClauseContext {
  field: CstNode[];
}

export interface SelectClauseFieldIdentifierContext extends WithIdentifier {
  fn: CstNode[];
  alias?: IToken[];
}

export interface SelectClauseFunctionIdentifierContext extends WithIdentifier {
  fn: CstNode[];
  alias?: IToken[];
}

export interface SelectClauseSubqueryIdentifierContext extends WithIdentifier {
  selectStatement?: CstNode[];
}

export interface SelectClauseTypeOfContext extends WithIdentifier {
  typeOfField: IToken[];
  selectClauseTypeOfThen: CstNode[];
  selectClauseTypeOfElse?: CstNode[];
}

export interface SelectClauseTypeOfThenContext extends WithIdentifier {
  typeOfField: IToken[];
  field: IToken[];
}

export interface SelectClauseTypeOfElseContext extends WithIdentifier {
  field: IToken[];
}

export interface WhereClauseContext {
  whereClauseExpression: CstNode[];
}

export interface WhereClauseSubqueryContext {
  selectStatement: CstNode[];
}

export interface WhereClauseExpressionContext {
  logicalOperator?: IToken[];
  expression: CstNode[];
}

export interface WithClauseContext {
  withSecurityEnforced?: CstNode[];
  withDataCategory?: CstNode[];
}

export interface WithDateCategoryContext {
  withDataCategoryArr: CstNode[];
}

export interface WithDateCategoryConditionContext {
  dataCategoryGroupName: IToken[];
  filteringSelector: IToken[];
  dataCategoryName: IToken[];
}

export interface GroupByClauseContext extends WithIdentifier {
  fn: CstNode[];
  havingClause: CstNode[];
}

export interface HavingClauseContext {
  havingClauseExpression: CstNode[];
}

export interface HavingClauseExpressionContext {
  logicalOperator?: IToken[];
  having: CstNode[];
}

export interface OrderByClauseContext {
  orderByExpressionOrFn: CstNode[];
}

export interface OrderByExpressionContext extends WithIdentifier {
  field: IToken[];
  order?: IToken[];
  nulls?: IToken[];
}

export interface OrderByFunctionExpressionContext extends WithIdentifier {
  fn: IToken[];
  alias?: IToken[];
  order?: IToken[];
  nulls?: IToken[];
}

export interface ValueContext {
  value: IToken[];
}

export interface OperatorContext {
  operator: IToken[];
}

export interface BooleanContext {
  boolean: IToken[];
}

export interface DateLiteralContext {
  dateLiteral: IToken[];
}

export interface DateNLiteralContext {
  dateNLiteral: IToken[];
  variable: IToken[];
}

export interface FieldFunctionContext {
  [value: string]: any;
  functionExpression?: CstNode[];
  fn: IToken[];
}

export interface ExpressionContext {
  logicalPrefix?: IToken[];
  lhs: IToken[] | CstNode[];
  operator: CstNode[]; // ExpressionOperatorContext
  L_PAREN?: IToken[];
  R_PAREN?: IToken[];
}

export interface ApexBindVariableExpressionContext {
  Identifier: IToken[];
}

export interface ExpressionOperatorContext {
  rhs: CstNode[];
  relationalOperator?: CstNode[];
  setOperator?: CstNode[];
}

export interface FromClauseContext extends WithIdentifier {
  alias?: IToken[];
}

export interface FunctionExpressionContext extends WithIdentifier {
  fn?: CstNode[];
}

export interface AtomicExpressionContext {
  apexBindVariableExpression?: CstNode[];
  NumberIdentifier?: IToken[];
  UnsignedInteger?: IToken[];
  SignedInteger?: IToken[];
  RealNumber?: IToken[];
  DateIdentifier?: IToken[];
  DateTime?: IToken[];
  date?: IToken[];
  NULL?: IToken[];
  StringIdentifier?: IToken[];
  Identifier?: IToken[];
  booleanValue?: CstNode[];
  dateLiteral?: CstNode[];
  dateNLiteral?: CstNode[];
  arrayExpression?: CstNode[];
  whereClauseSubqueryIdentifier?: CstNode[];
  DateToken?: IToken[];
}

export interface ExpressionWithAggregateFunctionContext {
  logicalPrefix?: IToken[];
  lhs: IToken[] | CstNode[];
  rhs: CstNode[];
  relationalOperator?: CstNode[];
  setOperator?: CstNode[];
}

// CstNode | CstNode[]
