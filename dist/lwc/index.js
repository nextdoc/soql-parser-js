// src/parser/lexer.ts
var TokenKind = /* @__PURE__ */ ((TokenKind2) => {
  TokenKind2[TokenKind2["AND"] = 0] = "AND";
  TokenKind2[TokenKind2["AS"] = 1] = "AS";
  TokenKind2[TokenKind2["ASC"] = 2] = "ASC";
  TokenKind2[TokenKind2["DESC"] = 3] = "DESC";
  TokenKind2[TokenKind2["CUBE"] = 4] = "CUBE";
  TokenKind2[TokenKind2["ELSE"] = 5] = "ELSE";
  TokenKind2[TokenKind2["EXCLUDES"] = 6] = "EXCLUDES";
  TokenKind2[TokenKind2["FALSE"] = 7] = "FALSE";
  TokenKind2[TokenKind2["FIRST"] = 8] = "FIRST";
  TokenKind2[TokenKind2["FROM"] = 9] = "FROM";
  TokenKind2[TokenKind2["GROUP_BY"] = 10] = "GROUP_BY";
  TokenKind2[TokenKind2["HAVING"] = 11] = "HAVING";
  TokenKind2[TokenKind2["IN"] = 12] = "IN";
  TokenKind2[TokenKind2["INCLUDES"] = 13] = "INCLUDES";
  TokenKind2[TokenKind2["LAST"] = 14] = "LAST";
  TokenKind2[TokenKind2["LIKE"] = 15] = "LIKE";
  TokenKind2[TokenKind2["LIMIT"] = 16] = "LIMIT";
  TokenKind2[TokenKind2["NOT"] = 17] = "NOT";
  TokenKind2[TokenKind2["NULL"] = 18] = "NULL";
  TokenKind2[TokenKind2["NULLS"] = 19] = "NULLS";
  TokenKind2[TokenKind2["OR"] = 20] = "OR";
  TokenKind2[TokenKind2["ORDER_BY"] = 21] = "ORDER_BY";
  TokenKind2[TokenKind2["ROLLUP"] = 22] = "ROLLUP";
  TokenKind2[TokenKind2["SELECT"] = 23] = "SELECT";
  TokenKind2[TokenKind2["TRUE"] = 24] = "TRUE";
  TokenKind2[TokenKind2["USING"] = 25] = "USING";
  TokenKind2[TokenKind2["WHERE"] = 26] = "WHERE";
  TokenKind2[TokenKind2["WITH"] = 27] = "WITH";
  TokenKind2[TokenKind2["FOR"] = 28] = "FOR";
  TokenKind2[TokenKind2["UPDATE"] = 29] = "UPDATE";
  TokenKind2[TokenKind2["ABOVE"] = 30] = "ABOVE";
  TokenKind2[TokenKind2["ABOVE_OR_BELOW"] = 31] = "ABOVE_OR_BELOW";
  TokenKind2[TokenKind2["APEX_NEW"] = 32] = "APEX_NEW";
  TokenKind2[TokenKind2["AT"] = 33] = "AT";
  TokenKind2[TokenKind2["BELOW"] = 34] = "BELOW";
  TokenKind2[TokenKind2["DATA_CATEGORY"] = 35] = "DATA_CATEGORY";
  TokenKind2[TokenKind2["END"] = 36] = "END";
  TokenKind2[TokenKind2["OFFSET"] = 37] = "OFFSET";
  TokenKind2[TokenKind2["REFERENCE"] = 38] = "REFERENCE";
  TokenKind2[TokenKind2["SCOPE"] = 39] = "SCOPE";
  TokenKind2[TokenKind2["TRACKING"] = 40] = "TRACKING";
  TokenKind2[TokenKind2["THEN"] = 41] = "THEN";
  TokenKind2[TokenKind2["TYPEOF"] = 42] = "TYPEOF";
  TokenKind2[TokenKind2["VIEW"] = 43] = "VIEW";
  TokenKind2[TokenKind2["VIEWSTAT"] = 44] = "VIEWSTAT";
  TokenKind2[TokenKind2["WHEN"] = 45] = "WHEN";
  TokenKind2[TokenKind2["SECURITY_ENFORCED"] = 46] = "SECURITY_ENFORCED";
  TokenKind2[TokenKind2["SYSTEM_MODE"] = 47] = "SYSTEM_MODE";
  TokenKind2[TokenKind2["USER_MODE"] = 48] = "USER_MODE";
  TokenKind2[TokenKind2["CALENDAR_MONTH"] = 49] = "CALENDAR_MONTH";
  TokenKind2[TokenKind2["CALENDAR_QUARTER"] = 50] = "CALENDAR_QUARTER";
  TokenKind2[TokenKind2["CALENDAR_YEAR"] = 51] = "CALENDAR_YEAR";
  TokenKind2[TokenKind2["DAY_IN_MONTH"] = 52] = "DAY_IN_MONTH";
  TokenKind2[TokenKind2["DAY_IN_WEEK"] = 53] = "DAY_IN_WEEK";
  TokenKind2[TokenKind2["DAY_IN_YEAR"] = 54] = "DAY_IN_YEAR";
  TokenKind2[TokenKind2["DAY_ONLY"] = 55] = "DAY_ONLY";
  TokenKind2[TokenKind2["FISCAL_MONTH"] = 56] = "FISCAL_MONTH";
  TokenKind2[TokenKind2["FISCAL_QUARTER"] = 57] = "FISCAL_QUARTER";
  TokenKind2[TokenKind2["FISCAL_YEAR"] = 58] = "FISCAL_YEAR";
  TokenKind2[TokenKind2["HOUR_IN_DAY"] = 59] = "HOUR_IN_DAY";
  TokenKind2[TokenKind2["WEEK_IN_MONTH"] = 60] = "WEEK_IN_MONTH";
  TokenKind2[TokenKind2["WEEK_IN_YEAR"] = 61] = "WEEK_IN_YEAR";
  TokenKind2[TokenKind2["AVG"] = 62] = "AVG";
  TokenKind2[TokenKind2["COUNT"] = 63] = "COUNT";
  TokenKind2[TokenKind2["COUNT_DISTINCT"] = 64] = "COUNT_DISTINCT";
  TokenKind2[TokenKind2["MIN"] = 65] = "MIN";
  TokenKind2[TokenKind2["MAX"] = 66] = "MAX";
  TokenKind2[TokenKind2["SUM"] = 67] = "SUM";
  TokenKind2[TokenKind2["DISTANCE"] = 68] = "DISTANCE";
  TokenKind2[TokenKind2["GEOLOCATION"] = 69] = "GEOLOCATION";
  TokenKind2[TokenKind2["FIELDS"] = 70] = "FIELDS";
  TokenKind2[TokenKind2["FORMAT"] = 71] = "FORMAT";
  TokenKind2[TokenKind2["TOLABEL"] = 72] = "TOLABEL";
  TokenKind2[TokenKind2["CONVERT_TIMEZONE"] = 73] = "CONVERT_TIMEZONE";
  TokenKind2[TokenKind2["CONVERT_CURRENCY"] = 74] = "CONVERT_CURRENCY";
  TokenKind2[TokenKind2["GROUPING"] = 75] = "GROUPING";
  TokenKind2[TokenKind2["ALL"] = 76] = "ALL";
  TokenKind2[TokenKind2["CUSTOM"] = 77] = "CUSTOM";
  TokenKind2[TokenKind2["STANDARD"] = 78] = "STANDARD";
  TokenKind2[TokenKind2["YESTERDAY"] = 79] = "YESTERDAY";
  TokenKind2[TokenKind2["TODAY"] = 80] = "TODAY";
  TokenKind2[TokenKind2["TOMORROW"] = 81] = "TOMORROW";
  TokenKind2[TokenKind2["LAST_WEEK"] = 82] = "LAST_WEEK";
  TokenKind2[TokenKind2["THIS_WEEK"] = 83] = "THIS_WEEK";
  TokenKind2[TokenKind2["NEXT_WEEK"] = 84] = "NEXT_WEEK";
  TokenKind2[TokenKind2["LAST_MONTH"] = 85] = "LAST_MONTH";
  TokenKind2[TokenKind2["THIS_MONTH"] = 86] = "THIS_MONTH";
  TokenKind2[TokenKind2["NEXT_MONTH"] = 87] = "NEXT_MONTH";
  TokenKind2[TokenKind2["LAST_90_DAYS"] = 88] = "LAST_90_DAYS";
  TokenKind2[TokenKind2["NEXT_90_DAYS"] = 89] = "NEXT_90_DAYS";
  TokenKind2[TokenKind2["THIS_QUARTER"] = 90] = "THIS_QUARTER";
  TokenKind2[TokenKind2["LAST_QUARTER"] = 91] = "LAST_QUARTER";
  TokenKind2[TokenKind2["NEXT_QUARTER"] = 92] = "NEXT_QUARTER";
  TokenKind2[TokenKind2["THIS_YEAR"] = 93] = "THIS_YEAR";
  TokenKind2[TokenKind2["LAST_YEAR"] = 94] = "LAST_YEAR";
  TokenKind2[TokenKind2["NEXT_YEAR"] = 95] = "NEXT_YEAR";
  TokenKind2[TokenKind2["THIS_FISCAL_QUARTER"] = 96] = "THIS_FISCAL_QUARTER";
  TokenKind2[TokenKind2["LAST_FISCAL_QUARTER"] = 97] = "LAST_FISCAL_QUARTER";
  TokenKind2[TokenKind2["NEXT_FISCAL_QUARTER"] = 98] = "NEXT_FISCAL_QUARTER";
  TokenKind2[TokenKind2["THIS_FISCAL_YEAR"] = 99] = "THIS_FISCAL_YEAR";
  TokenKind2[TokenKind2["LAST_FISCAL_YEAR"] = 100] = "LAST_FISCAL_YEAR";
  TokenKind2[TokenKind2["NEXT_FISCAL_YEAR"] = 101] = "NEXT_FISCAL_YEAR";
  TokenKind2[TokenKind2["NEXT_N_DAYS"] = 102] = "NEXT_N_DAYS";
  TokenKind2[TokenKind2["LAST_N_DAYS"] = 103] = "LAST_N_DAYS";
  TokenKind2[TokenKind2["N_DAYS_AGO"] = 104] = "N_DAYS_AGO";
  TokenKind2[TokenKind2["NEXT_N_WEEKS"] = 105] = "NEXT_N_WEEKS";
  TokenKind2[TokenKind2["LAST_N_WEEKS"] = 106] = "LAST_N_WEEKS";
  TokenKind2[TokenKind2["N_WEEKS_AGO"] = 107] = "N_WEEKS_AGO";
  TokenKind2[TokenKind2["NEXT_N_MONTHS"] = 108] = "NEXT_N_MONTHS";
  TokenKind2[TokenKind2["LAST_N_MONTHS"] = 109] = "LAST_N_MONTHS";
  TokenKind2[TokenKind2["N_MONTHS_AGO"] = 110] = "N_MONTHS_AGO";
  TokenKind2[TokenKind2["NEXT_N_QUARTERS"] = 111] = "NEXT_N_QUARTERS";
  TokenKind2[TokenKind2["LAST_N_QUARTERS"] = 112] = "LAST_N_QUARTERS";
  TokenKind2[TokenKind2["N_QUARTERS_AGO"] = 113] = "N_QUARTERS_AGO";
  TokenKind2[TokenKind2["NEXT_N_YEARS"] = 114] = "NEXT_N_YEARS";
  TokenKind2[TokenKind2["LAST_N_YEARS"] = 115] = "LAST_N_YEARS";
  TokenKind2[TokenKind2["N_YEARS_AGO"] = 116] = "N_YEARS_AGO";
  TokenKind2[TokenKind2["NEXT_N_FISCAL_QUARTERS"] = 117] = "NEXT_N_FISCAL_QUARTERS";
  TokenKind2[TokenKind2["LAST_N_FISCAL_QUARTERS"] = 118] = "LAST_N_FISCAL_QUARTERS";
  TokenKind2[TokenKind2["N_FISCAL_QUARTERS_AGO"] = 119] = "N_FISCAL_QUARTERS_AGO";
  TokenKind2[TokenKind2["NEXT_N_FISCAL_YEARS"] = 120] = "NEXT_N_FISCAL_YEARS";
  TokenKind2[TokenKind2["LAST_N_FISCAL_YEARS"] = 121] = "LAST_N_FISCAL_YEARS";
  TokenKind2[TokenKind2["N_FISCAL_YEARS_AGO"] = 122] = "N_FISCAL_YEARS_AGO";
  TokenKind2[TokenKind2["DELEGATED"] = 123] = "DELEGATED";
  TokenKind2[TokenKind2["EVERYTHING"] = 124] = "EVERYTHING";
  TokenKind2[TokenKind2["MINE_AND_MY_GROUPS"] = 125] = "MINE_AND_MY_GROUPS";
  TokenKind2[TokenKind2["MINE"] = 126] = "MINE";
  TokenKind2[TokenKind2["MY_TERRITORY"] = 127] = "MY_TERRITORY";
  TokenKind2[TokenKind2["MY_TEAM_TERRITORY"] = 128] = "MY_TEAM_TERRITORY";
  TokenKind2[TokenKind2["TEAM"] = 129] = "TEAM";
  TokenKind2[TokenKind2["ALL_PRIVATE"] = 130] = "ALL_PRIVATE";
  TokenKind2[TokenKind2["MRU"] = 131] = "MRU";
  TokenKind2[TokenKind2["EQUAL"] = 132] = "EQUAL";
  TokenKind2[TokenKind2["NOT_EQUAL"] = 133] = "NOT_EQUAL";
  TokenKind2[TokenKind2["LESS_THAN"] = 134] = "LESS_THAN";
  TokenKind2[TokenKind2["LESS_THAN_OR_EQUAL"] = 135] = "LESS_THAN_OR_EQUAL";
  TokenKind2[TokenKind2["GREATER_THAN"] = 136] = "GREATER_THAN";
  TokenKind2[TokenKind2["GREATER_THAN_OR_EQUAL"] = 137] = "GREATER_THAN_OR_EQUAL";
  TokenKind2[TokenKind2["L_PAREN"] = 138] = "L_PAREN";
  TokenKind2[TokenKind2["R_PAREN"] = 139] = "R_PAREN";
  TokenKind2[TokenKind2["L_SQUARE_BRACKET"] = 140] = "L_SQUARE_BRACKET";
  TokenKind2[TokenKind2["R_SQUARE_BRACKET"] = 141] = "R_SQUARE_BRACKET";
  TokenKind2[TokenKind2["DOT"] = 142] = "DOT";
  TokenKind2[TokenKind2["COMMA"] = 143] = "COMMA";
  TokenKind2[TokenKind2["COLON"] = 144] = "COLON";
  TokenKind2[TokenKind2["SEMICOLON"] = 145] = "SEMICOLON";
  TokenKind2[TokenKind2["ASTERISK"] = 146] = "ASTERISK";
  TokenKind2[TokenKind2["PLUS"] = 147] = "PLUS";
  TokenKind2[TokenKind2["MINUS"] = 148] = "MINUS";
  TokenKind2[TokenKind2["DATETIME"] = 149] = "DATETIME";
  TokenKind2[TokenKind2["DATE_TOKEN"] = 150] = "DATE_TOKEN";
  TokenKind2[TokenKind2["CURRENCY_PREFIXED_DECIMAL"] = 151] = "CURRENCY_PREFIXED_DECIMAL";
  TokenKind2[TokenKind2["CURRENCY_PREFIXED_INTEGER"] = 152] = "CURRENCY_PREFIXED_INTEGER";
  TokenKind2[TokenKind2["SIGNED_DECIMAL"] = 153] = "SIGNED_DECIMAL";
  TokenKind2[TokenKind2["UNSIGNED_DECIMAL"] = 154] = "UNSIGNED_DECIMAL";
  TokenKind2[TokenKind2["SIGNED_INTEGER"] = 155] = "SIGNED_INTEGER";
  TokenKind2[TokenKind2["UNSIGNED_INTEGER"] = 156] = "UNSIGNED_INTEGER";
  TokenKind2[TokenKind2["STRING_LITERAL"] = 157] = "STRING_LITERAL";
  TokenKind2[TokenKind2["GEOLOCATION_UNIT"] = 158] = "GEOLOCATION_UNIT";
  TokenKind2[TokenKind2["IDENTIFIER"] = 159] = "IDENTIFIER";
  TokenKind2[TokenKind2["EOF"] = 160] = "EOF";
  return TokenKind2;
})(TokenKind || {});
function isDateFunction(kind) {
  return kind >= 49 /* CALENDAR_MONTH */ && kind <= 61 /* WEEK_IN_YEAR */;
}
function isAggregateFunction(kind) {
  return kind >= 62 /* AVG */ && kind <= 67 /* SUM */;
}
function isLocationFunction(kind) {
  return kind >= 68 /* DISTANCE */ && kind <= 69 /* GEOLOCATION */;
}
function isFieldsFunction(kind) {
  return kind === 70 /* FIELDS */;
}
function isOtherFunction(kind) {
  return kind >= 71 /* FORMAT */ && kind <= 75 /* GROUPING */;
}
function isFieldsFunctionParam(kind) {
  return kind >= 76 /* ALL */ && kind <= 78 /* STANDARD */;
}
function isDateLiteral(kind) {
  return kind >= 79 /* YESTERDAY */ && kind <= 101 /* NEXT_FISCAL_YEAR */;
}
function isDateNLiteral(kind) {
  return kind >= 102 /* NEXT_N_DAYS */ && kind <= 122 /* N_FISCAL_YEARS_AGO */;
}
function isUsingScopeEnumeration(kind) {
  return kind >= 123 /* DELEGATED */ && kind <= 131 /* MRU */;
}
function isIdentifierLike(kind) {
  if (kind === 159 /* IDENTIFIER */) return true;
  if (kind >= 30 /* ABOVE */ && kind <= 48 /* USER_MODE */) return true;
  if (kind >= 49 /* CALENDAR_MONTH */ && kind <= 61 /* WEEK_IN_YEAR */) return true;
  if (kind >= 62 /* AVG */ && kind <= 67 /* SUM */) return true;
  if (kind >= 68 /* DISTANCE */ && kind <= 69 /* GEOLOCATION */) return true;
  if (kind === 70 /* FIELDS */) return true;
  if (kind >= 71 /* FORMAT */ && kind <= 75 /* GROUPING */) return true;
  if (kind >= 76 /* ALL */ && kind <= 78 /* STANDARD */) return true;
  if (kind >= 79 /* YESTERDAY */ && kind <= 101 /* NEXT_FISCAL_YEAR */) return true;
  if (kind >= 102 /* NEXT_N_DAYS */ && kind <= 122 /* N_FISCAL_YEARS_AGO */) return true;
  if (kind >= 123 /* DELEGATED */ && kind <= 131 /* MRU */) return true;
  if (kind === 158 /* GEOLOCATION_UNIT */) return true;
  if (kind === 152 /* CURRENCY_PREFIXED_INTEGER */) return true;
  return false;
}
function isNumberLiteral(kind) {
  return kind === 153 /* SIGNED_DECIMAL */ || kind === 154 /* UNSIGNED_DECIMAL */ || kind === 155 /* SIGNED_INTEGER */ || kind === 156 /* UNSIGNED_INTEGER */;
}
function isDecimalNumberLiteral(kind) {
  return kind === 151 /* CURRENCY_PREFIXED_DECIMAL */ || kind === 153 /* SIGNED_DECIMAL */ || kind === 154 /* UNSIGNED_DECIMAL */ || kind === 152 /* CURRENCY_PREFIXED_INTEGER */;
}
function isIntegerNumberLiteral(kind) {
  return kind === 155 /* SIGNED_INTEGER */ || kind === 156 /* UNSIGNED_INTEGER */;
}
function isRelationalOperator(kind) {
  return kind >= 132 /* EQUAL */ && kind <= 137 /* GREATER_THAN_OR_EQUAL */;
}
var keywordMap = /* @__PURE__ */ new Map([
  // Reserved keywords
  ["AND", 0 /* AND */],
  ["AS", 1 /* AS */],
  ["ASC", 2 /* ASC */],
  ["DESC", 3 /* DESC */],
  ["CUBE", 4 /* CUBE */],
  ["ELSE", 5 /* ELSE */],
  ["EXCLUDES", 6 /* EXCLUDES */],
  ["FALSE", 7 /* FALSE */],
  ["FIRST", 8 /* FIRST */],
  ["FROM", 9 /* FROM */],
  ["HAVING", 11 /* HAVING */],
  ["IN", 12 /* IN */],
  ["INCLUDES", 13 /* INCLUDES */],
  ["LAST", 14 /* LAST */],
  ["LIKE", 15 /* LIKE */],
  ["LIMIT", 16 /* LIMIT */],
  ["NOT", 17 /* NOT */],
  ["NULL", 18 /* NULL */],
  ["NULLS", 19 /* NULLS */],
  ["OR", 20 /* OR */],
  ["ROLLUP", 22 /* ROLLUP */],
  ["SELECT", 23 /* SELECT */],
  ["TRUE", 24 /* TRUE */],
  ["USING", 25 /* USING */],
  ["WHERE", 26 /* WHERE */],
  ["WITH", 27 /* WITH */],
  ["FOR", 28 /* FOR */],
  ["UPDATE", 29 /* UPDATE */],
  // Non-reserved keywords
  ["ABOVE_OR_BELOW", 31 /* ABOVE_OR_BELOW */],
  ["ABOVE", 30 /* ABOVE */],
  ["NEW", 32 /* APEX_NEW */],
  ["AT", 33 /* AT */],
  ["BELOW", 34 /* BELOW */],
  ["END", 36 /* END */],
  ["OFFSET", 37 /* OFFSET */],
  ["REFERENCE", 38 /* REFERENCE */],
  ["SCOPE", 39 /* SCOPE */],
  ["TRACKING", 40 /* TRACKING */],
  ["THEN", 41 /* THEN */],
  ["TYPEOF", 42 /* TYPEOF */],
  ["VIEW", 43 /* VIEW */],
  ["VIEWSTAT", 44 /* VIEWSTAT */],
  ["WHEN", 45 /* WHEN */],
  ["SECURITY_ENFORCED", 46 /* SECURITY_ENFORCED */],
  ["SYSTEM_MODE", 47 /* SYSTEM_MODE */],
  ["USER_MODE", 48 /* USER_MODE */],
  // Date functions
  ["CALENDAR_MONTH", 49 /* CALENDAR_MONTH */],
  ["CALENDAR_QUARTER", 50 /* CALENDAR_QUARTER */],
  ["CALENDAR_YEAR", 51 /* CALENDAR_YEAR */],
  ["DAY_IN_MONTH", 52 /* DAY_IN_MONTH */],
  ["DAY_IN_WEEK", 53 /* DAY_IN_WEEK */],
  ["DAY_IN_YEAR", 54 /* DAY_IN_YEAR */],
  ["DAY_ONLY", 55 /* DAY_ONLY */],
  ["FISCAL_MONTH", 56 /* FISCAL_MONTH */],
  ["FISCAL_QUARTER", 57 /* FISCAL_QUARTER */],
  ["FISCAL_YEAR", 58 /* FISCAL_YEAR */],
  ["HOUR_IN_DAY", 59 /* HOUR_IN_DAY */],
  ["WEEK_IN_MONTH", 60 /* WEEK_IN_MONTH */],
  ["WEEK_IN_YEAR", 61 /* WEEK_IN_YEAR */],
  // Aggregate functions
  ["AVG", 62 /* AVG */],
  ["COUNT_DISTINCT", 64 /* COUNT_DISTINCT */],
  ["COUNT", 63 /* COUNT */],
  ["MIN", 65 /* MIN */],
  ["MAX", 66 /* MAX */],
  ["SUM", 67 /* SUM */],
  // Location functions
  ["DISTANCE", 68 /* DISTANCE */],
  ["GEOLOCATION", 69 /* GEOLOCATION */],
  // Fields function
  ["FIELDS", 70 /* FIELDS */],
  // Other functions
  ["FORMAT", 71 /* FORMAT */],
  ["TOLABEL", 72 /* TOLABEL */],
  ["CONVERTTIMEZONE", 73 /* CONVERT_TIMEZONE */],
  ["CONVERTCURRENCY", 74 /* CONVERT_CURRENCY */],
  ["GROUPING", 75 /* GROUPING */],
  // Fields function params
  ["ALL", 76 /* ALL */],
  ["CUSTOM", 77 /* CUSTOM */],
  ["STANDARD", 78 /* STANDARD */],
  // Date literals
  ["YESTERDAY", 79 /* YESTERDAY */],
  ["TODAY", 80 /* TODAY */],
  ["TOMORROW", 81 /* TOMORROW */],
  ["LAST_WEEK", 82 /* LAST_WEEK */],
  ["THIS_WEEK", 83 /* THIS_WEEK */],
  ["NEXT_WEEK", 84 /* NEXT_WEEK */],
  ["LAST_MONTH", 85 /* LAST_MONTH */],
  ["THIS_MONTH", 86 /* THIS_MONTH */],
  ["NEXT_MONTH", 87 /* NEXT_MONTH */],
  ["LAST_90_DAYS", 88 /* LAST_90_DAYS */],
  ["NEXT_90_DAYS", 89 /* NEXT_90_DAYS */],
  ["THIS_QUARTER", 90 /* THIS_QUARTER */],
  ["LAST_QUARTER", 91 /* LAST_QUARTER */],
  ["NEXT_QUARTER", 92 /* NEXT_QUARTER */],
  ["THIS_YEAR", 93 /* THIS_YEAR */],
  ["LAST_YEAR", 94 /* LAST_YEAR */],
  ["NEXT_YEAR", 95 /* NEXT_YEAR */],
  ["THIS_FISCAL_QUARTER", 96 /* THIS_FISCAL_QUARTER */],
  ["LAST_FISCAL_QUARTER", 97 /* LAST_FISCAL_QUARTER */],
  ["NEXT_FISCAL_QUARTER", 98 /* NEXT_FISCAL_QUARTER */],
  ["THIS_FISCAL_YEAR", 99 /* THIS_FISCAL_YEAR */],
  ["LAST_FISCAL_YEAR", 100 /* LAST_FISCAL_YEAR */],
  ["NEXT_FISCAL_YEAR", 101 /* NEXT_FISCAL_YEAR */],
  // Date N literals
  ["NEXT_N_DAYS", 102 /* NEXT_N_DAYS */],
  ["LAST_N_DAYS", 103 /* LAST_N_DAYS */],
  ["N_DAYS_AGO", 104 /* N_DAYS_AGO */],
  ["NEXT_N_WEEKS", 105 /* NEXT_N_WEEKS */],
  ["LAST_N_WEEKS", 106 /* LAST_N_WEEKS */],
  ["N_WEEKS_AGO", 107 /* N_WEEKS_AGO */],
  ["NEXT_N_MONTHS", 108 /* NEXT_N_MONTHS */],
  ["LAST_N_MONTHS", 109 /* LAST_N_MONTHS */],
  ["N_MONTHS_AGO", 110 /* N_MONTHS_AGO */],
  ["NEXT_N_QUARTERS", 111 /* NEXT_N_QUARTERS */],
  ["LAST_N_QUARTERS", 112 /* LAST_N_QUARTERS */],
  ["N_QUARTERS_AGO", 113 /* N_QUARTERS_AGO */],
  ["NEXT_N_YEARS", 114 /* NEXT_N_YEARS */],
  ["LAST_N_YEARS", 115 /* LAST_N_YEARS */],
  ["N_YEARS_AGO", 116 /* N_YEARS_AGO */],
  ["NEXT_N_FISCAL_QUARTERS", 117 /* NEXT_N_FISCAL_QUARTERS */],
  ["LAST_N_FISCAL_QUARTERS", 118 /* LAST_N_FISCAL_QUARTERS */],
  ["N_FISCAL_QUARTERS_AGO", 119 /* N_FISCAL_QUARTERS_AGO */],
  ["NEXT_N_FISCAL_YEARS", 120 /* NEXT_N_FISCAL_YEARS */],
  ["LAST_N_FISCAL_YEARS", 121 /* LAST_N_FISCAL_YEARS */],
  ["N_FISCAL_YEARS_AGO", 122 /* N_FISCAL_YEARS_AGO */],
  // Using scope enumerations
  ["DELEGATED", 123 /* DELEGATED */],
  ["EVERYTHING", 124 /* EVERYTHING */],
  ["MINEANDMYGROUPS", 125 /* MINE_AND_MY_GROUPS */],
  ["MINE", 126 /* MINE */],
  ["MY_TERRITORY", 127 /* MY_TERRITORY */],
  ["MY_TEAM_TERRITORY", 128 /* MY_TEAM_TERRITORY */],
  ["TEAM", 129 /* TEAM */],
  ["ALLPRIVATE", 130 /* ALL_PRIVATE */],
  ["MRU", 131 /* MRU */]
]);
var _tokenTypeNames = [];
(function initTokenTypeNames() {
  for (const key of Object.keys(TokenKind)) {
    const val = TokenKind[key];
    if (typeof val === "number") {
      _tokenTypeNames[val] = key;
    }
  }
  _tokenTypeNames[72 /* TOLABEL */] = "toLabel";
  _tokenTypeNames[73 /* CONVERT_TIMEZONE */] = "convertTimezone";
  _tokenTypeNames[74 /* CONVERT_CURRENCY */] = "convertCurrency";
  _tokenTypeNames[157 /* STRING_LITERAL */] = "StringIdentifier";
  _tokenTypeNames[150 /* DATE_TOKEN */] = "DATE";
  _tokenTypeNames[32 /* APEX_NEW */] = "new";
  _tokenTypeNames[125 /* MINE_AND_MY_GROUPS */] = "MineAndMyGroups";
  _tokenTypeNames[127 /* MY_TERRITORY */] = "MyTerritory";
  _tokenTypeNames[128 /* MY_TEAM_TERRITORY */] = "MyTeamTerritory";
  _tokenTypeNames[130 /* ALL_PRIVATE */] = "AllPrivate";
  _tokenTypeNames[123 /* DELEGATED */] = "Delegated";
  _tokenTypeNames[124 /* EVERYTHING */] = "Everything";
  _tokenTypeNames[126 /* MINE */] = "Mine";
  _tokenTypeNames[129 /* TEAM */] = "Team";
  _tokenTypeNames[131 /* MRU */] = "Mru";
  _tokenTypeNames[159 /* IDENTIFIER */] = "Identifier";
  _tokenTypeNames[132 /* EQUAL */] = "EQUAL";
  _tokenTypeNames[156 /* UNSIGNED_INTEGER */] = "UNSIGNED_INTEGER";
  _tokenTypeNames[155 /* SIGNED_INTEGER */] = "SIGNED_INTEGER";
  _tokenTypeNames[154 /* UNSIGNED_DECIMAL */] = "UNSIGNED_DECIMAL";
  _tokenTypeNames[153 /* SIGNED_DECIMAL */] = "SIGNED_DECIMAL";
  _tokenTypeNames[151 /* CURRENCY_PREFIXED_DECIMAL */] = "CURRENCY_PREFIXED_DECIMAL";
  _tokenTypeNames[152 /* CURRENCY_PREFIXED_INTEGER */] = "CURRENCY_PREFIXED_INTEGER";
})();
function tokenTypeName(kind) {
  return _tokenTypeNames[kind] || TokenKind[kind];
}
function isAlpha(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
function isDigit(ch) {
  return ch >= 48 && ch <= 57;
}
function isAlphaNumOrUnderscore(ch) {
  return isAlpha(ch) || isDigit(ch) || ch === 95;
}
function isWhitespace(ch) {
  return ch === 32 || ch === 9 || ch === 10 || ch === 13 || ch === 12;
}
function tokenize(input) {
  const tokens = [];
  const len = input.length;
  let pos = 0;
  while (pos < len) {
    const ch = input.charCodeAt(pos);
    if (isWhitespace(ch)) {
      pos++;
      while (pos < len && isWhitespace(input.charCodeAt(pos))) {
        pos++;
      }
      continue;
    }
    if (ch === 39) {
      const start = pos;
      pos++;
      while (pos < len) {
        const c = input.charCodeAt(pos);
        if (c === 92) {
          pos += 2;
          continue;
        }
        if (c === 39) {
          pos++;
          break;
        }
        pos++;
      }
      const text = input.substring(start, pos);
      const inner = text.substring(1, text.length - 1);
      const innerUpper = inner.toUpperCase();
      if (innerUpper === "MI" || innerUpper === "KM") {
        tokens.push({ kind: 158 /* GEOLOCATION_UNIT */, text, start });
      } else {
        tokens.push({ kind: 157 /* STRING_LITERAL */, text, start });
      }
      continue;
    }
    if (isDigit(ch)) {
      if (pos + 9 < len && input.charCodeAt(pos + 4) === 45 && input.charCodeAt(pos + 7) === 45) {
        let isDatePattern = true;
        for (const off of [0, 1, 2, 3, 5, 6, 8, 9]) {
          if (!isDigit(input.charCodeAt(pos + off))) {
            isDatePattern = false;
            break;
          }
        }
        if (isDatePattern) {
          if (pos + 10 < len && (input.charCodeAt(pos + 10) === 84 || input.charCodeAt(pos + 10) === 116)) {
            const start2 = pos;
            pos += 11;
            while (pos < len) {
              const tc = input.charCodeAt(pos);
              if (isDigit(tc) || tc === 58) {
                pos++;
              } else {
                break;
              }
            }
            if (pos < len && input.charCodeAt(pos) === 46) {
              pos++;
              while (pos < len && isDigit(input.charCodeAt(pos))) {
                pos++;
              }
            }
            if (pos < len) {
              const tzCh = input.charCodeAt(pos);
              if (tzCh === 90 || tzCh === 122) {
                pos++;
              } else if (tzCh === 46) {
                pos++;
                while (pos < len && isDigit(input.charCodeAt(pos))) {
                  pos++;
                }
                if (pos < len && (input.charCodeAt(pos) === 90 || input.charCodeAt(pos) === 122)) {
                  pos++;
                }
              } else if (tzCh === 43 || tzCh === 45) {
                pos++;
                while (pos < len) {
                  const dc = input.charCodeAt(pos);
                  if (isDigit(dc) || dc === 58) {
                    pos++;
                  } else {
                    break;
                  }
                }
              }
            }
            tokens.push({ kind: 149 /* DATETIME */, text: input.substring(start2, pos), start: start2 });
            continue;
          } else {
            const start2 = pos;
            pos += 10;
            tokens.push({ kind: 150 /* DATE_TOKEN */, text: input.substring(start2, pos), start: start2 });
            continue;
          }
        }
      }
      const start = pos;
      while (pos < len && isDigit(input.charCodeAt(pos))) {
        pos++;
      }
      if (pos < len && input.charCodeAt(pos) === 46) {
        if (pos + 1 < len && isDigit(input.charCodeAt(pos + 1))) {
          pos++;
          while (pos < len && isDigit(input.charCodeAt(pos))) {
            pos++;
          }
          tokens.push({ kind: 154 /* UNSIGNED_DECIMAL */, text: input.substring(start, pos), start });
          continue;
        }
      }
      tokens.push({ kind: 156 /* UNSIGNED_INTEGER */, text: input.substring(start, pos), start });
      continue;
    }
    if (ch === 33) {
      if (pos + 1 < len && input.charCodeAt(pos + 1) === 61) {
        tokens.push({ kind: 133 /* NOT_EQUAL */, text: "!=", start: pos });
        pos += 2;
        continue;
      }
      throw new Error(`Unexpected character '!' at position ${pos}`);
    }
    if (ch === 60) {
      if (pos + 1 < len) {
        const next = input.charCodeAt(pos + 1);
        if (next === 61) {
          tokens.push({ kind: 135 /* LESS_THAN_OR_EQUAL */, text: "<=", start: pos });
          pos += 2;
          continue;
        }
        if (next === 62) {
          tokens.push({ kind: 133 /* NOT_EQUAL */, text: "<>", start: pos });
          pos += 2;
          continue;
        }
      }
      tokens.push({ kind: 134 /* LESS_THAN */, text: "<", start: pos });
      pos++;
      continue;
    }
    if (ch === 62) {
      if (pos + 1 < len && input.charCodeAt(pos + 1) === 61) {
        tokens.push({ kind: 137 /* GREATER_THAN_OR_EQUAL */, text: ">=", start: pos });
        pos += 2;
        continue;
      }
      tokens.push({ kind: 136 /* GREATER_THAN */, text: ">", start: pos });
      pos++;
      continue;
    }
    if (ch === 61) {
      tokens.push({ kind: 132 /* EQUAL */, text: "=", start: pos });
      pos++;
      continue;
    }
    if (ch === 40) {
      tokens.push({ kind: 138 /* L_PAREN */, text: "(", start: pos });
      pos++;
      continue;
    }
    if (ch === 41) {
      tokens.push({ kind: 139 /* R_PAREN */, text: ")", start: pos });
      pos++;
      continue;
    }
    if (ch === 91) {
      tokens.push({ kind: 140 /* L_SQUARE_BRACKET */, text: "[", start: pos });
      pos++;
      continue;
    }
    if (ch === 93) {
      tokens.push({ kind: 141 /* R_SQUARE_BRACKET */, text: "]", start: pos });
      pos++;
      continue;
    }
    if (ch === 44) {
      tokens.push({ kind: 143 /* COMMA */, text: ",", start: pos });
      pos++;
      continue;
    }
    if (ch === 58) {
      tokens.push({ kind: 144 /* COLON */, text: ":", start: pos });
      pos++;
      continue;
    }
    if (ch === 59) {
      tokens.push({ kind: 145 /* SEMICOLON */, text: ";", start: pos });
      pos++;
      continue;
    }
    if (ch === 42) {
      tokens.push({ kind: 146 /* ASTERISK */, text: "*", start: pos });
      pos++;
      continue;
    }
    if (ch === 43 || ch === 45) {
      if (pos + 1 < len) {
        const nextCh = input.charCodeAt(pos + 1);
        if (isDigit(nextCh)) {
          const start = pos;
          pos++;
          while (pos < len && isDigit(input.charCodeAt(pos))) {
            pos++;
          }
          if (pos < len && input.charCodeAt(pos) === 46) {
            if (pos + 1 < len && isDigit(input.charCodeAt(pos + 1))) {
              pos++;
              while (pos < len && isDigit(input.charCodeAt(pos))) {
                pos++;
              }
              tokens.push({ kind: 153 /* SIGNED_DECIMAL */, text: input.substring(start, pos), start });
              continue;
            }
          }
          tokens.push({ kind: 155 /* SIGNED_INTEGER */, text: input.substring(start, pos), start });
          continue;
        }
        if (nextCh === 46 && pos + 2 < len && isDigit(input.charCodeAt(pos + 2))) {
          const start = pos;
          pos += 2;
          while (pos < len && isDigit(input.charCodeAt(pos))) {
            pos++;
          }
          tokens.push({ kind: 153 /* SIGNED_DECIMAL */, text: input.substring(start, pos), start });
          continue;
        }
      }
      tokens.push({ kind: ch === 43 ? 147 /* PLUS */ : 148 /* MINUS */, text: input[pos], start: pos });
      pos++;
      continue;
    }
    if (ch === 46) {
      if (pos + 1 < len && isDigit(input.charCodeAt(pos + 1))) {
        const start = pos;
        pos++;
        while (pos < len && isDigit(input.charCodeAt(pos))) {
          pos++;
        }
        tokens.push({ kind: 154 /* UNSIGNED_DECIMAL */, text: input.substring(start, pos), start });
        continue;
      }
      tokens.push({ kind: 142 /* DOT */, text: ".", start: pos });
      pos++;
      continue;
    }
    if (isAlpha(ch)) {
      const start = pos;
      pos++;
      while (pos < len) {
        const c = input.charCodeAt(pos);
        if (isAlphaNumOrUnderscore(c) || c === 46) {
          pos++;
        } else {
          break;
        }
      }
      let text = input.substring(start, pos);
      if (text.includes("..")) {
        throw new Error(`Invalid identifier with consecutive dots at position ${start}: "${text}"`);
      }
      const upper = text.toUpperCase();
      if (upper === "ORDER" && !text.includes(".")) {
        const byResult = peekMultiWordSuffix(input, pos, "BY");
        if (byResult !== -1) {
          const fullText = input.substring(start, byResult);
          tokens.push({ kind: 21 /* ORDER_BY */, text: fullText, start });
          pos = byResult;
          continue;
        }
      }
      if (upper === "GROUP" && !text.includes(".")) {
        const byResult = peekMultiWordSuffix(input, pos, "BY");
        if (byResult !== -1) {
          const fullText = input.substring(start, byResult);
          tokens.push({ kind: 10 /* GROUP_BY */, text: fullText, start });
          pos = byResult;
          continue;
        }
      }
      if (upper === "DATA" && !text.includes(".")) {
        const catResult = peekMultiWordSuffix(input, pos, "CATEGORY");
        if (catResult !== -1) {
          const fullText = input.substring(start, catResult);
          tokens.push({ kind: 35 /* DATA_CATEGORY */, text: fullText, start });
          pos = catResult;
          continue;
        }
      }
      if (text.length >= 4) {
        const first3 = text.substring(0, 3);
        if (isAllAlpha(first3)) {
          const rest = text.substring(3);
          if (isCurrencyNumberSuffix(rest)) {
            if (rest.includes(".")) {
              tokens.push({ kind: 151 /* CURRENCY_PREFIXED_DECIMAL */, text, start });
            } else {
              tokens.push({ kind: 152 /* CURRENCY_PREFIXED_INTEGER */, text, start });
            }
            continue;
          }
        }
      }
      if (text.length === 3 && isAllAlpha(text)) {
        const savedPos = pos;
        let currPos = pos;
        let hasMinus = false;
        if (currPos < len && input.charCodeAt(currPos) === 45) {
          hasMinus = true;
          currPos++;
        }
        if (hasMinus && currPos < len && isDigit(input.charCodeAt(currPos))) {
          while (currPos < len && isDigit(input.charCodeAt(currPos))) {
            currPos++;
          }
          if (currPos < len && input.charCodeAt(currPos) === 46 && currPos + 1 < len && isDigit(input.charCodeAt(currPos + 1))) {
            currPos++;
            while (currPos < len && isDigit(input.charCodeAt(currPos))) {
              currPos++;
            }
            const fullText = input.substring(start, currPos);
            tokens.push({ kind: 151 /* CURRENCY_PREFIXED_DECIMAL */, text: fullText, start });
            pos = currPos;
            continue;
          }
          if (currPos >= len || !isAlphaNumOrUnderscore(input.charCodeAt(currPos)) && input.charCodeAt(currPos) !== 46) {
            const fullText = input.substring(start, currPos);
            tokens.push({ kind: 152 /* CURRENCY_PREFIXED_INTEGER */, text: fullText, start });
            pos = currPos;
            continue;
          }
          pos = savedPos;
        }
      }
      if (text.includes(".")) {
        tokens.push({ kind: 159 /* IDENTIFIER */, text, start });
        continue;
      }
      const kwKind = keywordMap.get(upper);
      if (kwKind !== void 0) {
        tokens.push({ kind: kwKind, text, start });
        continue;
      }
      tokens.push({ kind: 159 /* IDENTIFIER */, text, start });
      continue;
    }
    throw new Error(`Unexpected character '${input[pos]}' (code ${ch}) at position ${pos}`);
  }
  tokens.push({ kind: 160 /* EOF */, text: "", start: pos });
  return tokens;
}
function peekMultiWordSuffix(input, pos, suffix) {
  const len = input.length;
  let p = pos;
  if (p >= len || !isWhitespace(input.charCodeAt(p))) {
    return -1;
  }
  while (p < len && isWhitespace(input.charCodeAt(p))) {
    p++;
  }
  const suffixLen = suffix.length;
  if (p + suffixLen > len) {
    return -1;
  }
  for (let i = 0; i < suffixLen; i++) {
    const c = input.charCodeAt(p + i);
    const s = suffix.charCodeAt(i);
    const upper = c >= 97 && c <= 122 ? c - 32 : c;
    if (upper !== s) {
      return -1;
    }
  }
  const afterSuffix = p + suffixLen;
  if (afterSuffix < len) {
    const nextCh = input.charCodeAt(afterSuffix);
    if (isAlphaNumOrUnderscore(nextCh) || nextCh === 46) {
      return -1;
    }
  }
  return afterSuffix;
}
function isAllAlpha(s) {
  for (let i = 0; i < s.length; i++) {
    if (!isAlpha(s.charCodeAt(i))) return false;
  }
  return true;
}
function isCurrencyNumberSuffix(s) {
  if (s.length === 0) return false;
  let i = 0;
  if (s.charCodeAt(i) === 45) {
    i++;
  }
  if (i >= s.length || !isDigit(s.charCodeAt(i))) return false;
  while (i < s.length && isDigit(s.charCodeAt(i))) {
    i++;
  }
  if (i < s.length) {
    if (s.charCodeAt(i) === 46) {
      i++;
      if (i >= s.length || !isDigit(s.charCodeAt(i))) return false;
      while (i < s.length && isDigit(s.charCodeAt(i))) {
        i++;
      }
    }
  }
  return i === s.length;
}

// src/parser/parser.ts
var CLAUSE_KEYWORDS = /* @__PURE__ */ new Set([
  23 /* SELECT */,
  9 /* FROM */,
  26 /* WHERE */,
  21 /* ORDER_BY */,
  10 /* GROUP_BY */,
  11 /* HAVING */,
  16 /* LIMIT */,
  27 /* WITH */,
  28 /* FOR */,
  29 /* UPDATE */,
  25 /* USING */,
  19 /* NULLS */,
  2 /* ASC */,
  3 /* DESC */,
  0 /* AND */,
  20 /* OR */,
  17 /* NOT */,
  45 /* WHEN */,
  41 /* THEN */,
  5 /* ELSE */,
  36 /* END */,
  42 /* TYPEOF */,
  143 /* COMMA */,
  139 /* R_PAREN */,
  160 /* EOF */
]);
var SoqlParser = class _SoqlParser {
  constructor(tokens, config) {
    this.pos = 0;
    this.tokens = tokens;
    this.config = config;
  }
  getPos() {
    return this.pos;
  }
  // ---- Navigation helpers ----
  peek() {
    return this.tokens[this.pos];
  }
  peekAt(offset) {
    const idx = this.pos + offset;
    if (idx >= this.tokens.length) {
      return this.tokens[this.tokens.length - 1];
    }
    return this.tokens[idx];
  }
  advance() {
    const t = this.tokens[this.pos];
    if (t.kind !== 160 /* EOF */) {
      this.pos++;
    }
    return t;
  }
  expect(kind) {
    const t = this.peek();
    if (t.kind !== kind) {
      throw this.error(`Expected ${TokenKind[kind]} but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
    }
    return this.advance();
  }
  match(kind) {
    if (this.peek().kind === kind) {
      this.advance();
      return true;
    }
    return false;
  }
  check(kind) {
    return this.peek().kind === kind;
  }
  isAtEnd() {
    return this.peek().kind === 160 /* EOF */;
  }
  error(message) {
    if (this.config.logErrors) {
      console.log(message);
    }
    return new Error(message);
  }
  static {
    this.CLAUSE_BOUNDARY_KINDS = /* @__PURE__ */ new Set([
      26 /* WHERE */,
      21 /* ORDER_BY */,
      10 /* GROUP_BY */,
      11 /* HAVING */,
      16 /* LIMIT */,
      37 /* OFFSET */,
      27 /* WITH */,
      28 /* FOR */,
      29 /* UPDATE */,
      25 /* USING */,
      160 /* EOF */
    ]);
  }
  isAtClauseBoundary() {
    const k = this.peek().kind;
    return _SoqlParser.CLAUSE_BOUNDARY_KINDS.has(k) || k === 139 /* R_PAREN */;
  }
  synchronize() {
    while (!this.isAtEnd()) {
      if (this.isAtClauseBoundary()) return;
      this.advance();
    }
  }
  // ---- Identifier consumption ----
  // Consumes an identifier token. In SOQL many keywords can appear as identifiers.
  // The lexer produces specific TokenKind for keywords; we accept anything that isIdentifierLike.
  consumeIdentifier() {
    const t = this.peek();
    if (isIdentifierLike(t.kind)) {
      return this.advance();
    }
    throw this.error(`Expected identifier but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }
  // Check if the current token can be treated as an identifier
  checkIdentifier() {
    return isIdentifierLike(this.peek().kind);
  }
  // ---- Check if next token is a function name followed by ( ----
  isFunctionCall() {
    const t = this.peek();
    const next = this.peekAt(1);
    return (isDateFunction(t.kind) || isAggregateFunction(t.kind) || isLocationFunction(t.kind) || isFieldsFunction(t.kind) || isOtherFunction(t.kind)) && next.kind === 138 /* L_PAREN */;
  }
  // ---- Check if current token could be an alias ----
  // An alias is an identifier-like token that is NOT a clause keyword,
  // and NOT OFFSET followed by an unsigned integer.
  canBeAlias() {
    const t = this.peek();
    if (!isIdentifierLike(t.kind)) return false;
    if (CLAUSE_KEYWORDS.has(t.kind)) return false;
    if (t.kind === 37 /* OFFSET */ && this.peekAt(1).kind === 156 /* UNSIGNED_INTEGER */) return false;
    return true;
  }
  // ---- Literal type detection ----
  getLiteralType(kind) {
    const name = tokenTypeName(kind);
    if (name === "UNSIGNED_INTEGER" || name === "SIGNED_INTEGER") return "INTEGER";
    if (name === "UNSIGNED_DECIMAL" || name === "SIGNED_DECIMAL") return "DECIMAL";
    if (name === "CURRENCY_PREFIXED_DECIMAL") return "DECIMAL_WITH_CURRENCY_PREFIX";
    if (name === "CURRENCY_PREFIXED_INTEGER") return "INTEGER_WITH_CURRENCY_PREFIX";
    if (name === "DATETIME") return "DATETIME";
    if (name === "DATE") return "DATE";
    if (name === "NULL") return "NULL";
    if (name === "StringIdentifier") return "STRING";
    if (name === "Identifier") return "STRING";
    if (name === "TRUE" || name === "FALSE") return "BOOLEAN";
    if (isDateLiteral(kind)) return "DATE_LITERAL";
    if (isDateNLiteral(kind)) return "DATE_N_LITERAL";
    return "STRING";
  }
  // ====================================================================
  // Entry Points
  // ====================================================================
  parseSelectStatement(isSubquery2 = false) {
    const fields = this.parseSelectClause();
    const fromResult = this.parseFromClause();
    let query;
    if (isSubquery2) {
      query = {
        fields,
        relationshipName: fromResult.sObject
      };
      if (fromResult.sObjectPrefix) {
        query.sObjectPrefix = fromResult.sObjectPrefix;
      }
    } else {
      query = {
        fields,
        sObject: fromResult.sObject
      };
    }
    if (fromResult.alias) {
      query.sObjectAlias = fromResult.alias;
    }
    this.applySObjectAlias(query);
    const clauses = this.parseClauseStatements();
    Object.assign(query, clauses);
    return query;
  }
  parseSelectStatementPartial() {
    let fields;
    let fromResult;
    if (this.check(23 /* SELECT */)) {
      fields = this.parseSelectClause();
    }
    if (this.check(9 /* FROM */)) {
      fromResult = this.parseFromClause();
    }
    const query = {};
    if (fields) {
      query.fields = fields;
    }
    if (fromResult) {
      query.sObject = fromResult.sObject;
      if (fromResult.alias) {
        query.sObjectAlias = fromResult.alias;
      }
    }
    if (query.fields) {
      this.applySObjectAlias(query);
    }
    const clauses = this.parseClauseStatements();
    Object.assign(query, clauses);
    return query;
  }
  applySObjectAlias(query) {
    if (!query.sObjectAlias || !Array.isArray(query.fields)) return;
    const alias = query.sObjectAlias;
    query.fields.forEach((field) => {
      if (field.relationships && field.relationships[0] === alias) {
        field.relationships = field.relationships.slice(1);
        field.objectPrefix = alias;
        if (field.relationships.length === 0) {
          delete field.relationships;
          field.type = "Field";
        }
      }
    });
  }
  // ====================================================================
  // SELECT Clause
  // ====================================================================
  parseSelectClause() {
    this.expect(23 /* SELECT */);
    const fields = [];
    fields.push(this.parseSelectField());
    while (this.match(143 /* COMMA */)) {
      fields.push(this.parseSelectField());
    }
    return fields;
  }
  parseSelectField() {
    const t = this.peek();
    const next = this.peekAt(1);
    if (t.kind === 138 /* L_PAREN */ && next.kind === 23 /* SELECT */) {
      return this.parseSelectClauseSubqueryIdentifier();
    }
    if (t.kind === 42 /* TYPEOF */) {
      return this.parseSelectClauseTypeOf();
    }
    if (this.isFunctionCall()) {
      return this.parseSelectClauseFunctionIdentifier();
    }
    return this.parseSelectClauseIdentifier();
  }
  parseSelectClauseFunctionIdentifier() {
    const fn = this.parseAnyFunction(true);
    if (this.canBeAlias()) {
      fn.alias = this.consumeIdentifier().text;
    }
    return fn;
  }
  parseSelectClauseSubqueryIdentifier() {
    this.expect(138 /* L_PAREN */);
    const subquery = this.parseSelectStatement(true);
    this.expect(139 /* R_PAREN */);
    return {
      type: "FieldSubquery",
      subquery
    };
  }
  parseSelectClauseTypeOf() {
    this.expect(42 /* TYPEOF */);
    const field = this.consumeIdentifier().text;
    const conditions = [];
    while (this.check(45 /* WHEN */)) {
      this.advance();
      const objectType = this.consumeIdentifier().text;
      this.expect(41 /* THEN */);
      const fieldList = [];
      fieldList.push(this.consumeIdentifier().text);
      while (this.match(143 /* COMMA */)) {
        fieldList.push(this.consumeIdentifier().text);
      }
      conditions.push({ type: "WHEN", objectType, fieldList });
    }
    if (this.check(5 /* ELSE */)) {
      this.advance();
      const fieldList = [];
      fieldList.push(this.consumeIdentifier().text);
      while (this.match(143 /* COMMA */)) {
        fieldList.push(this.consumeIdentifier().text);
      }
      conditions.push({ type: "ELSE", fieldList });
    }
    this.expect(36 /* END */);
    return {
      type: "FieldTypeof",
      field,
      conditions
    };
  }
  parseSelectClauseIdentifier() {
    const idToken = this.consumeIdentifier();
    const fullText = idToken.text;
    let output;
    if (!fullText.includes(".")) {
      output = {
        type: "Field",
        field: fullText
      };
    } else {
      const parts = fullText.split(".");
      output = {
        type: "FieldRelationship",
        field: parts[parts.length - 1],
        relationships: parts.slice(0, parts.length - 1),
        rawValue: fullText
      };
    }
    if (this.canBeAlias()) {
      output.alias = this.consumeIdentifier().text;
    }
    return output;
  }
  // ====================================================================
  // FROM Clause
  // ====================================================================
  parseFromClause() {
    this.expect(9 /* FROM */);
    const idToken = this.consumeIdentifier();
    const fullText = idToken.text;
    let result;
    if (fullText.includes(".")) {
      const parts = fullText.split(".");
      result = {
        sObjectPrefix: parts.slice(0, parts.length - 1),
        sObject: parts[parts.length - 1]
      };
    } else {
      result = { sObject: fullText };
    }
    if (this.canBeAlias()) {
      result.alias = this.consumeIdentifier().text;
    }
    return result;
  }
  // ====================================================================
  // Clause Statements (everything after FROM)
  // ====================================================================
  parseClauseStatements() {
    const query = {};
    const tryParse = (fn, cleanup) => {
      if (this.config.ignoreParseErrors) {
        try {
          fn();
          if (!this.isAtClauseBoundary()) {
            if (cleanup) cleanup();
            this.synchronize();
          }
        } catch (e) {
          if (this.config.logErrors) {
            console.log(e);
          }
          if (cleanup) cleanup();
          this.synchronize();
        }
      } else {
        fn();
      }
    };
    if (this.check(25 /* USING */)) {
      tryParse(() => {
        query.usingScope = this.parseUsingScope();
      });
    }
    if (this.check(26 /* WHERE */)) {
      tryParse(
        () => {
          query.where = this.parseWhereClause();
        },
        () => {
          delete query.where;
        }
      );
    }
    while (this.check(27 /* WITH */)) {
      tryParse(() => {
        const withResult = this.parseWithClause();
        if (withResult.withSecurityEnforced) {
          query.withSecurityEnforced = true;
        }
        if (withResult.withAccessLevel) {
          query.withAccessLevel = withResult.withAccessLevel;
        }
        if (withResult.withDataCategory) {
          query.withDataCategory = withResult.withDataCategory;
        }
      });
    }
    if (this.check(10 /* GROUP_BY */)) {
      tryParse(() => {
        query.groupBy = this.parseGroupByClause();
      });
      if (this.check(11 /* HAVING */)) {
        tryParse(() => {
          query.having = this.parseHavingClause();
        });
      }
    }
    if (this.check(21 /* ORDER_BY */)) {
      tryParse(() => {
        query.orderBy = this.parseOrderByClause();
      });
    }
    if (this.check(16 /* LIMIT */)) {
      tryParse(() => {
        this.advance();
        query.limit = Number(this.expect(156 /* UNSIGNED_INTEGER */).text);
      });
    }
    if (this.check(37 /* OFFSET */)) {
      tryParse(() => {
        this.advance();
        query.offset = Number(this.expect(156 /* UNSIGNED_INTEGER */).text);
      });
    }
    if (this.check(28 /* FOR */)) {
      tryParse(() => {
        this.advance();
        const t = this.peek();
        if (t.kind === 43 /* VIEW */ || t.kind === 38 /* REFERENCE */ || t.kind === 29 /* UPDATE */) {
          query.for = tokenTypeName(this.advance().kind);
        } else {
          throw this.error(`Expected VIEW, REFERENCE, or UPDATE after FOR at position ${t.start}`);
        }
      });
    }
    if (this.check(29 /* UPDATE */)) {
      tryParse(() => {
        this.advance();
        const t = this.peek();
        if (t.kind === 40 /* TRACKING */ || t.kind === 44 /* VIEWSTAT */) {
          query.update = tokenTypeName(this.advance().kind);
        } else {
          throw this.error(`Expected TRACKING or VIEWSTAT after UPDATE at position ${t.start}`);
        }
      });
    }
    return query;
  }
  // ====================================================================
  // USING SCOPE
  // ====================================================================
  parseUsingScope() {
    this.expect(25 /* USING */);
    this.expect(39 /* SCOPE */);
    const t = this.peek();
    if (isUsingScopeEnumeration(t.kind)) {
      return this.advance().text;
    }
    if (isIdentifierLike(t.kind)) {
      return this.advance().text;
    }
    throw this.error(`Expected scope enumeration value at position ${t.start}`);
  }
  // ====================================================================
  // WHERE Clause
  // ====================================================================
  parseWhereClause() {
    this.expect(26 /* WHERE */);
    return this.parseConditionExpressions(true, true);
  }
  parseConditionExpressions(allowAggregateFn, allowLocationFn) {
    let expressionTree;
    let prevExpression;
    const parenCount = { left: 0, right: 0 };
    while (true) {
      let logicalOp;
      if (expressionTree) {
        if (this.check(0 /* AND */)) {
          logicalOp = "AND";
          this.advance();
        } else if (this.check(20 /* OR */)) {
          logicalOp = "OR";
          this.advance();
        } else {
          break;
        }
      }
      let baseExpression = {};
      let currExpression = baseExpression;
      let parentForRight = null;
      while (this.hasNegationPrefix()) {
        let openParenCount = 0;
        while (this.check(138 /* L_PAREN */) && this.isNegationAhead()) {
          this.advance();
          openParenCount++;
          parenCount.left++;
        }
        if (this.check(17 /* NOT */)) {
          this.advance();
          const negation = {
            left: openParenCount > 0 ? { openParen: openParenCount } : null,
            operator: "NOT",
            right: { left: {} }
          };
          if (!parentForRight) {
            baseExpression = negation;
          } else {
            parentForRight.right = negation;
          }
          parentForRight = negation;
          currExpression = negation.right;
        } else {
          break;
        }
      }
      currExpression.left = this.parseExpression(allowAggregateFn, allowLocationFn, parenCount);
      if (!expressionTree) {
        expressionTree = baseExpression;
        prevExpression = baseExpression;
      } else {
        if (logicalOp) {
          prevExpression.operator = logicalOp;
          prevExpression.right = baseExpression;
        }
      }
      let temp = baseExpression;
      while (temp.right && temp.right.left !== void 0) {
        const r = temp.right;
        if (r.right && r.right.left !== void 0) {
          temp = r;
        } else {
          temp = r;
          break;
        }
      }
      prevExpression = temp;
      if (this.isAtEnd()) break;
      const nextKind = this.peek().kind;
      if (nextKind !== 0 /* AND */ && nextKind !== 20 /* OR */) break;
    }
    if (parenCount.left !== parenCount.right) {
      throw this.error(`Mismatched parentheses in WHERE/HAVING clause: ${parenCount.left} open vs ${parenCount.right} close`);
    }
    return expressionTree;
  }
  // Check if there's a negation pattern ahead (possible parens then NOT then expression)
  hasNegationPrefix() {
    let offset = 0;
    while (this.peekAt(offset).kind === 138 /* L_PAREN */) {
      offset++;
    }
    return this.peekAt(offset).kind === 17 /* NOT */;
  }
  // Check if after some L_PARENs there is a NOT keyword
  isNegationAhead() {
    let offset = 1;
    while (this.peekAt(offset).kind === 138 /* L_PAREN */) {
      offset++;
    }
    return this.peekAt(offset).kind === 17 /* NOT */;
  }
  // ====================================================================
  // Expression (WHERE/HAVING condition)
  // ====================================================================
  parseExpression(allowAggregateFn, allowLocationFn, parenCount) {
    let openParenCount = 0;
    while (this.check(138 /* L_PAREN */) && !this.isSubqueryStart() && !this.isArrayExpressionStart()) {
      this.advance();
      openParenCount++;
      if (parenCount) parenCount.left++;
    }
    let lhs;
    let isLhsFn = false;
    if (allowAggregateFn && isAggregateFunction(this.peek().kind) && this.peekAt(1).kind === 138 /* L_PAREN */) {
      lhs = this.parseAggregateFunction(false);
      isLhsFn = true;
    } else if (allowLocationFn && isLocationFunction(this.peek().kind) && this.peek().kind === 68 /* DISTANCE */ && this.peekAt(1).kind === 138 /* L_PAREN */) {
      lhs = this.parseLocationFunction(false);
      isLhsFn = true;
    } else if (isDateFunction(this.peek().kind) && this.peekAt(1).kind === 138 /* L_PAREN */) {
      lhs = this.parseDateFunction(false);
      isLhsFn = true;
    } else if (isOtherFunction(this.peek().kind) && this.peekAt(1).kind === 138 /* L_PAREN */) {
      lhs = this.parseOtherFunction(false);
      isLhsFn = true;
    } else {
      lhs = this.consumeIdentifier().text;
    }
    const operatorResult = this.parseOperator();
    const operator = operatorResult.operator;
    const isSetOperator = operatorResult.isSet;
    let value;
    let literalType;
    let dateLiteralVariable;
    if (isSetOperator) {
      if (this.check(138 /* L_PAREN */) && this.peekAt(1).kind === 23 /* SELECT */) {
        this.expect(138 /* L_PAREN */);
        value = this.parseSelectStatement(false);
        this.expect(139 /* R_PAREN */);
        literalType = "SUBQUERY";
      } else if (this.config.allowApexBindVariables && this.check(144 /* COLON */)) {
        const apexResult = this.parseApexBindVariable();
        value = apexResult.value;
        literalType = "APEX_BIND_VARIABLE";
      } else {
        const arrayResult = this.parseArrayExpression();
        value = arrayResult.values;
        literalType = arrayResult.literalType;
        dateLiteralVariable = arrayResult.dateLiteralVariable;
      }
    } else {
      const atomicResult = this.parseAtomicValue();
      value = atomicResult.value;
      literalType = atomicResult.literalType;
      dateLiteralVariable = atomicResult.dateLiteralVariable;
    }
    let closeParenCount = 0;
    while (this.check(139 /* R_PAREN */) && (!parenCount || parenCount.left > parenCount.right)) {
      this.advance();
      closeParenCount++;
      if (parenCount) parenCount.right++;
    }
    const condition = {};
    if (isLhsFn) {
      condition.fn = lhs;
    } else {
      condition.field = lhs;
    }
    condition.operator = operator;
    if (literalType === "SUBQUERY") {
      condition.valueQuery = value;
    } else {
      condition.value = value;
    }
    condition.literalType = literalType;
    if (dateLiteralVariable !== void 0) {
      condition.dateLiteralVariable = dateLiteralVariable;
    }
    if (openParenCount > 0) {
      condition.openParen = openParenCount;
    }
    if (closeParenCount > 0) {
      condition.closeParen = closeParenCount;
    }
    return condition;
  }
  isSubqueryStart() {
    return this.check(138 /* L_PAREN */) && this.peekAt(1).kind === 23 /* SELECT */;
  }
  isArrayExpressionStart() {
    return false;
  }
  // ====================================================================
  // Operators
  // ====================================================================
  parseOperator() {
    const t = this.peek();
    if (isRelationalOperator(t.kind)) {
      return { operator: this.advance().text, isSet: false };
    }
    if (t.kind === 15 /* LIKE */) {
      this.advance();
      return { operator: "LIKE", isSet: false };
    }
    if (t.kind === 12 /* IN */) {
      this.advance();
      return { operator: "IN", isSet: true };
    }
    if (t.kind === 17 /* NOT */ && this.peekAt(1).kind === 12 /* IN */) {
      this.advance();
      this.advance();
      return { operator: "NOT IN", isSet: true };
    }
    if (t.kind === 13 /* INCLUDES */) {
      this.advance();
      return { operator: "INCLUDES", isSet: true };
    }
    if (t.kind === 6 /* EXCLUDES */) {
      this.advance();
      return { operator: "EXCLUDES", isSet: true };
    }
    throw this.error(`Expected operator but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }
  // ====================================================================
  // Atomic Values
  // ====================================================================
  parseAtomicValue() {
    const t = this.peek();
    if (this.config.allowApexBindVariables && t.kind === 144 /* COLON */) {
      const result = this.parseApexBindVariable();
      return { value: result.value, literalType: "APEX_BIND_VARIABLE" };
    }
    if (t.kind === 157 /* STRING_LITERAL */) {
      return { value: this.advance().text, literalType: "STRING" };
    }
    if (t.kind === 158 /* GEOLOCATION_UNIT */) {
      return { value: this.advance().text, literalType: "STRING" };
    }
    if (t.kind === 156 /* UNSIGNED_INTEGER */) {
      return { value: this.advance().text, literalType: "INTEGER" };
    }
    if (t.kind === 155 /* SIGNED_INTEGER */) {
      return { value: this.advance().text, literalType: "INTEGER" };
    }
    if (t.kind === 154 /* UNSIGNED_DECIMAL */) {
      return { value: this.advance().text, literalType: "DECIMAL" };
    }
    if (t.kind === 153 /* SIGNED_DECIMAL */) {
      return { value: this.advance().text, literalType: "DECIMAL" };
    }
    if (t.kind === 151 /* CURRENCY_PREFIXED_DECIMAL */) {
      return { value: this.advance().text, literalType: "DECIMAL_WITH_CURRENCY_PREFIX" };
    }
    if (t.kind === 152 /* CURRENCY_PREFIXED_INTEGER */) {
      return { value: this.advance().text, literalType: "INTEGER_WITH_CURRENCY_PREFIX" };
    }
    if (t.kind === 149 /* DATETIME */) {
      return { value: this.advance().text, literalType: "DATETIME" };
    }
    if (t.kind === 150 /* DATE_TOKEN */) {
      return { value: this.advance().text, literalType: "DATE" };
    }
    if (t.kind === 18 /* NULL */) {
      this.advance();
      return { value: "NULL", literalType: "NULL" };
    }
    if (t.kind === 24 /* TRUE */ || t.kind === 7 /* FALSE */) {
      return { value: tokenTypeName(this.advance().kind), literalType: "BOOLEAN" };
    }
    if (isDateLiteral(t.kind)) {
      return { value: this.advance().text, literalType: "DATE_LITERAL" };
    }
    if (isDateNLiteral(t.kind)) {
      const dateNToken = this.advance();
      this.expect(144 /* COLON */);
      const numToken = this.peek();
      let variable;
      if (numToken.kind === 156 /* UNSIGNED_INTEGER */ || numToken.kind === 155 /* SIGNED_INTEGER */) {
        variable = Number(this.advance().text);
      } else {
        throw this.error(`Expected integer after date N literal colon at position ${numToken.start}`);
      }
      const value = `${dateNToken.text}:${variable}`;
      return { value, literalType: "DATE_N_LITERAL", dateLiteralVariable: variable };
    }
    throw this.error(`Expected value but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }
  // ====================================================================
  // Array Expression
  // ====================================================================
  parseArrayExpression() {
    this.expect(138 /* L_PAREN */);
    const items = [];
    items.push(this.parseArrayItem());
    while (this.match(143 /* COMMA */)) {
      items.push(this.parseArrayItem());
    }
    this.expect(139 /* R_PAREN */);
    const values = items.map((i) => i.value);
    const types = items.map((i) => i.type);
    const dateLiteralTemp = items.map((i) => i.variable !== void 0 ? i.variable : null);
    const hasDateLiterals = dateLiteralTemp.some((item) => item !== null);
    let literalType;
    if (new Set(types).size === 1) {
      literalType = this.getLiteralType(this.tokenKindFromTypeName(types[0]));
    } else {
      literalType = types.map((t) => this.getLiteralType(this.tokenKindFromTypeName(t)));
    }
    const result = { values, literalType };
    if (hasDateLiterals) {
      result.dateLiteralVariable = dateLiteralTemp;
    }
    return result;
  }
  tokenKindFromTypeName(name) {
    for (let i = 0; i <= 160 /* EOF */; i++) {
      if (tokenTypeName(i) === name) return i;
    }
    return 159 /* IDENTIFIER */;
  }
  parseArrayItem() {
    const t = this.peek();
    if (t.kind === 157 /* STRING_LITERAL */) {
      return { value: this.advance().text, type: tokenTypeName(157 /* STRING_LITERAL */) };
    }
    if (t.kind === 158 /* GEOLOCATION_UNIT */) {
      return { value: this.advance().text, type: tokenTypeName(158 /* GEOLOCATION_UNIT */) };
    }
    if (t.kind === 151 /* CURRENCY_PREFIXED_DECIMAL */) {
      return { value: this.advance().text, type: tokenTypeName(151 /* CURRENCY_PREFIXED_DECIMAL */) };
    }
    if (t.kind === 152 /* CURRENCY_PREFIXED_INTEGER */) {
      return { value: this.advance().text, type: tokenTypeName(152 /* CURRENCY_PREFIXED_INTEGER */) };
    }
    if (isNumberLiteral(t.kind)) {
      const token = this.advance();
      return { value: token.text, type: tokenTypeName(token.kind) };
    }
    if (t.kind === 149 /* DATETIME */) {
      return { value: this.advance().text, type: tokenTypeName(149 /* DATETIME */) };
    }
    if (t.kind === 150 /* DATE_TOKEN */) {
      return { value: this.advance().text, type: tokenTypeName(150 /* DATE_TOKEN */) };
    }
    if (t.kind === 18 /* NULL */) {
      this.advance();
      return { value: "NULL", type: "NULL" };
    }
    if (t.kind === 24 /* TRUE */) {
      return { value: this.advance().text, type: "TRUE" };
    }
    if (t.kind === 7 /* FALSE */) {
      return { value: this.advance().text, type: "FALSE" };
    }
    if (isDateLiteral(t.kind)) {
      return { value: this.advance().text, type: tokenTypeName(t.kind) };
    }
    if (isDateNLiteral(t.kind)) {
      const dateNToken = this.advance();
      this.expect(144 /* COLON */);
      const numToken = this.peek();
      let variable;
      if (numToken.kind === 156 /* UNSIGNED_INTEGER */ || numToken.kind === 155 /* SIGNED_INTEGER */) {
        variable = Number(this.advance().text);
      } else {
        throw this.error(`Expected integer after date N literal colon at position ${numToken.start}`);
      }
      return {
        value: `${dateNToken.text}:${variable}`,
        type: tokenTypeName(dateNToken.kind),
        variable
      };
    }
    throw this.error(`Expected array value but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }
  // ====================================================================
  // Apex Bind Variables
  // ====================================================================
  parseApexBindVariable() {
    this.expect(144 /* COLON */);
    const parts = [];
    if (this.check(32 /* APEX_NEW */)) {
      parts.push(this.parseApexBindNewInstantiation());
    } else if (this.checkIdentifier()) {
      if (this.peekAt(1).kind === 138 /* L_PAREN */) {
        parts.push(this.parseApexBindFunctionCall());
      } else {
        parts.push(this.parseApexBindIdentifier());
      }
    }
    while (this.check(142 /* DOT */)) {
      this.advance();
      if (this.checkIdentifier() && this.peekAt(1).kind === 138 /* L_PAREN */) {
        parts.push(this.parseApexBindFunctionCall());
      } else if (this.checkIdentifier()) {
        parts.push(this.parseApexBindIdentifier());
      }
    }
    return { value: parts.join(".") };
  }
  parseApexBindIdentifier() {
    let output = this.consumeIdentifier().text;
    if (this.check(140 /* L_SQUARE_BRACKET */)) {
      output += this.parseApexBindArrayAccessor();
    }
    return output;
  }
  parseApexBindNewInstantiation() {
    this.expect(32 /* APEX_NEW */);
    const fnName = this.consumeIdentifier().text;
    let output = `new ${fnName}`;
    if (this.check(134 /* LESS_THAN */)) {
      this.advance();
      const params = [];
      params.push(this.consumeIdentifier().text);
      while (this.match(143 /* COMMA */)) {
        params.push(this.consumeIdentifier().text);
      }
      this.expect(136 /* GREATER_THAN */);
      output += `<${params.join(", ")}>`;
    }
    output += this.parseApexBindFunctionParams();
    if (this.check(140 /* L_SQUARE_BRACKET */)) {
      output += this.parseApexBindArrayAccessor();
    }
    return output;
  }
  parseApexBindFunctionCall() {
    const fnName = this.consumeIdentifier().text;
    let output = fnName + this.parseApexBindFunctionParams();
    if (this.check(140 /* L_SQUARE_BRACKET */)) {
      output += this.parseApexBindArrayAccessor();
    }
    return output;
  }
  parseApexBindFunctionParams() {
    this.expect(138 /* L_PAREN */);
    const params = [];
    if (!this.check(139 /* R_PAREN */)) {
      params.push(this.consumeIdentifier().text);
      while (this.match(143 /* COMMA */)) {
        params.push(this.consumeIdentifier().text);
      }
    }
    this.expect(139 /* R_PAREN */);
    return `(${params.join(", ")})`;
  }
  parseApexBindArrayAccessor() {
    this.expect(140 /* L_SQUARE_BRACKET */);
    const t = this.peek();
    let val;
    if (t.kind === 156 /* UNSIGNED_INTEGER */) {
      val = this.advance().text;
    } else if (isIdentifierLike(t.kind)) {
      val = this.advance().text;
    } else {
      throw this.error(`Expected integer or identifier in array accessor at position ${t.start}`);
    }
    this.expect(141 /* R_SQUARE_BRACKET */);
    return `[${val}]`;
  }
  // ====================================================================
  // Functions
  // ====================================================================
  // Parse any function type, used in SELECT clause function identifier context
  parseAnyFunction(includeType) {
    const t = this.peek();
    if (isDateFunction(t.kind)) return this.parseDateFunction(includeType);
    if (isAggregateFunction(t.kind)) return this.parseAggregateFunction(includeType);
    if (t.kind === 68 /* DISTANCE */) return this.parseLocationFunction(includeType);
    if (isFieldsFunction(t.kind)) return this.parseFieldsFunction(includeType);
    if (isOtherFunction(t.kind)) return this.parseOtherFunction(includeType);
    throw this.error(`Expected function name but found ${TokenKind[t.kind]} at position ${t.start}`);
  }
  parseDateFunction(includeType) {
    const fnToken = this.advance();
    const fnName = tokenTypeName(fnToken.kind);
    const params = this.parseFunctionExpression(false, includeType);
    const output = {};
    if (includeType) {
      output.type = "FieldFunctionExpression";
    }
    output.functionName = fnName;
    output.parameters = params;
    if (includeType) {
      output.isAggregateFn = true;
    }
    output.rawValue = `${fnToken.text}(${params.map((p) => typeof p === "string" ? p : p.rawValue).join(", ")})`;
    return output;
  }
  parseAggregateFunction(includeType) {
    const fnToken = this.advance();
    const fnName = tokenTypeName(fnToken.kind);
    const params = this.parseFunctionExpression(true, includeType);
    const output = {};
    if (includeType) {
      output.type = "FieldFunctionExpression";
    }
    output.functionName = fnName;
    output.parameters = params;
    if (includeType) {
      output.isAggregateFn = true;
    }
    output.rawValue = `${fnToken.text}(${params.map((p) => typeof p === "string" ? p : p.rawValue).join(", ")})`;
    return output;
  }
  parseFieldsFunction(includeType) {
    this.advance();
    this.expect(138 /* L_PAREN */);
    const t = this.peek();
    let paramText;
    if (isFieldsFunctionParam(t.kind)) {
      paramText = this.advance().text;
    } else if (isIdentifierLike(t.kind)) {
      paramText = this.advance().text;
    } else {
      throw this.error(`Expected FIELDS function parameter at position ${t.start}`);
    }
    this.expect(139 /* R_PAREN */);
    const output = {};
    if (includeType) {
      output.type = "FieldFunctionExpression";
    }
    output.functionName = "FIELDS";
    output.parameters = [paramText];
    output.rawValue = `FIELDS(${paramText})`;
    return output;
  }
  parseOtherFunction(includeType) {
    const fnToken = this.advance();
    const fnName = tokenTypeName(fnToken.kind);
    const params = this.parseFunctionExpression(false, includeType);
    const output = {};
    if (includeType) {
      output.type = "FieldFunctionExpression";
    }
    output.functionName = fnName;
    output.parameters = params;
    output.rawValue = `${fnToken.text}(${params.map((p) => typeof p === "string" ? p : p.rawValue).join(", ")})`;
    return output;
  }
  parseLocationFunction(includeType) {
    this.advance();
    this.expect(138 /* L_PAREN */);
    const location1 = this.consumeIdentifier().text;
    this.expect(143 /* COMMA */);
    let location2;
    if (this.check(69 /* GEOLOCATION */) && this.peekAt(1).kind === 138 /* L_PAREN */) {
      location2 = this.parseGeolocationFunction(includeType);
    } else {
      location2 = this.consumeIdentifier().text;
    }
    this.expect(143 /* COMMA */);
    const unit = this.expect(158 /* GEOLOCATION_UNIT */).text;
    this.expect(139 /* R_PAREN */);
    const output = {};
    if (includeType) {
      output.type = "FieldFunctionExpression";
    }
    output.functionName = "DISTANCE";
    output.parameters = [location1, location2, unit];
    if (includeType) {
      output.isAggregateFn = true;
    }
    const loc2Str = typeof location2 === "string" ? location2 : location2.rawValue;
    output.rawValue = `DISTANCE(${location1}, ${loc2Str}, ${unit})`;
    return output;
  }
  parseGeolocationFunction(includeType) {
    this.advance();
    this.expect(138 /* L_PAREN */);
    const lat = this.parseNumberValue();
    this.expect(143 /* COMMA */);
    const lon = this.parseNumberValue();
    this.expect(139 /* R_PAREN */);
    const output = {};
    if (includeType) {
      output.type = "FieldFunctionExpression";
    }
    output.functionName = "GEOLOCATION";
    output.parameters = [lat, lon];
    output.rawValue = `GEOLOCATION(${lat}, ${lon})`;
    return output;
  }
  parseNumberValue() {
    const t = this.peek();
    if (t.kind === 156 /* UNSIGNED_INTEGER */ || t.kind === 155 /* SIGNED_INTEGER */ || t.kind === 154 /* UNSIGNED_DECIMAL */ || t.kind === 153 /* SIGNED_DECIMAL */) {
      return this.advance().text;
    }
    throw this.error(`Expected number but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }
  parseFunctionExpression(skipAggregate, includeType = true) {
    this.expect(138 /* L_PAREN */);
    const params = [];
    if (!this.check(139 /* R_PAREN */)) {
      params.push(this.parseFunctionParam(skipAggregate, includeType));
      while (this.match(143 /* COMMA */)) {
        params.push(this.parseFunctionParam(skipAggregate, includeType));
      }
    }
    this.expect(139 /* R_PAREN */);
    return params;
  }
  parseFunctionParam(skipAggregate, includeType) {
    const t = this.peek();
    const next = this.peekAt(1);
    if (!skipAggregate && isAggregateFunction(t.kind) && next.kind === 138 /* L_PAREN */) {
      return this.parseAggregateFunction(includeType);
    }
    if (isOtherFunction(t.kind) && next.kind === 138 /* L_PAREN */) {
      return this.parseOtherFunction(includeType);
    }
    if (t.kind === 157 /* STRING_LITERAL */) {
      return this.advance().text;
    }
    if (isNumberLiteral(t.kind)) {
      return this.advance().text;
    }
    if (isIdentifierLike(t.kind)) {
      return this.advance().text;
    }
    throw this.error(`Expected function parameter but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }
  // ====================================================================
  // GROUP BY Clause
  // ====================================================================
  parseGroupByClause() {
    this.expect(10 /* GROUP_BY */);
    const groups = [];
    groups.push(this.parseGroupByItem());
    while (this.match(143 /* COMMA */)) {
      groups.push(this.parseGroupByItem());
    }
    return groups;
  }
  parseGroupByItem() {
    const t = this.peek();
    if (t.kind === 4 /* CUBE */ && this.peekAt(1).kind === 138 /* L_PAREN */) {
      return { fn: this.parseCubeOrRollupFunction("CUBE") };
    }
    if (t.kind === 22 /* ROLLUP */ && this.peekAt(1).kind === 138 /* L_PAREN */) {
      return { fn: this.parseCubeOrRollupFunction("ROLLUP") };
    }
    if (isDateFunction(t.kind) && this.peekAt(1).kind === 138 /* L_PAREN */) {
      return { fn: this.parseDateFunction(false) };
    }
    return { field: this.consumeIdentifier().text };
  }
  parseCubeOrRollupFunction(name) {
    const fnToken = this.advance();
    const params = this.parseFunctionExpression(false);
    return {
      functionName: name,
      parameters: params,
      rawValue: `${name}(${params.join(", ")})`
    };
  }
  // ====================================================================
  // HAVING Clause
  // ====================================================================
  parseHavingClause() {
    this.expect(11 /* HAVING */);
    return this.parseConditionExpressions(true, false);
  }
  // ====================================================================
  // ORDER BY Clause
  // ====================================================================
  parseOrderByClause() {
    this.expect(21 /* ORDER_BY */);
    const items = [];
    items.push(this.parseOrderByItem());
    while (this.match(143 /* COMMA */)) {
      items.push(this.parseOrderByItem());
    }
    return items;
  }
  parseOrderByItem() {
    const t = this.peek();
    const next = this.peekAt(1);
    let clause;
    if (t.kind === 75 /* GROUPING */ && next.kind === 138 /* L_PAREN */) {
      const fnToken = this.advance();
      const params = this.parseFunctionExpression(false);
      clause = {
        fn: {
          functionName: tokenTypeName(fnToken.kind),
          parameters: params,
          rawValue: `${fnToken.text}(${params.join(", ")})`
        }
      };
    } else if (isAggregateFunction(t.kind) && next.kind === 138 /* L_PAREN */) {
      clause = { fn: this.parseAggregateFunction(false) };
    } else if (isDateFunction(t.kind) && next.kind === 138 /* L_PAREN */) {
      clause = { fn: this.parseDateFunction(false) };
    } else if (t.kind === 68 /* DISTANCE */ && next.kind === 138 /* L_PAREN */) {
      clause = { fn: this.parseLocationFunction(false) };
    } else {
      clause = { field: this.consumeIdentifier().text };
    }
    if (this.check(2 /* ASC */)) {
      clause.order = tokenTypeName(this.advance().kind);
    } else if (this.check(3 /* DESC */)) {
      clause.order = tokenTypeName(this.advance().kind);
    }
    if (this.check(19 /* NULLS */)) {
      this.advance();
      if (this.check(8 /* FIRST */)) {
        clause.nulls = tokenTypeName(this.advance().kind);
      } else if (this.check(14 /* LAST */)) {
        clause.nulls = tokenTypeName(this.advance().kind);
      } else {
        throw this.error(`Expected FIRST or LAST after NULLS at position ${this.peek().start}`);
      }
    }
    return clause;
  }
  // ====================================================================
  // WITH Clause
  // ====================================================================
  parseWithClause() {
    this.expect(27 /* WITH */);
    const t = this.peek();
    if (t.kind === 46 /* SECURITY_ENFORCED */) {
      this.advance();
      return { withSecurityEnforced: true };
    }
    if (t.kind === 48 /* USER_MODE */) {
      this.advance();
      return { withAccessLevel: "USER_MODE" };
    }
    if (t.kind === 47 /* SYSTEM_MODE */) {
      this.advance();
      return { withAccessLevel: "SYSTEM_MODE" };
    }
    if (t.kind === 35 /* DATA_CATEGORY */) {
      return { withDataCategory: this.parseWithDataCategory() };
    }
    throw this.error(`Expected SECURITY_ENFORCED, USER_MODE, SYSTEM_MODE, or DATA CATEGORY after WITH at position ${t.start}`);
  }
  parseWithDataCategory() {
    this.expect(35 /* DATA_CATEGORY */);
    const conditions = [];
    conditions.push(this.parseDataCategoryCondition());
    while (this.check(0 /* AND */)) {
      this.advance();
      conditions.push(this.parseDataCategoryCondition());
    }
    return { conditions };
  }
  parseDataCategoryCondition() {
    const groupName = this.consumeIdentifier().text;
    const t = this.peek();
    let selector;
    if (t.kind === 33 /* AT */ || t.kind === 30 /* ABOVE */ || t.kind === 34 /* BELOW */ || t.kind === 31 /* ABOVE_OR_BELOW */) {
      selector = this.advance().text;
    } else {
      throw this.error(`Expected data category selector (AT, ABOVE, BELOW, ABOVE_OR_BELOW) at position ${t.start}`);
    }
    const hasParen = this.match(138 /* L_PAREN */);
    const parameters = [];
    parameters.push(this.consumeIdentifier().text);
    while (this.match(143 /* COMMA */)) {
      parameters.push(this.consumeIdentifier().text);
    }
    if (hasParen) {
      this.expect(139 /* R_PAREN */);
    }
    return { groupName, selector, parameters };
  }
};
function parseQuery(soql, options) {
  const config = options || {};
  const tokens = tokenize(soql);
  const parser = new SoqlParser(tokens, config);
  let query;
  if (config.allowPartialQuery) {
    query = parser.parseSelectStatementPartial();
  } else {
    query = parser.parseSelectStatement(false);
  }
  if (!parser.isAtEnd() && !config.ignoreParseErrors) {
    const remaining = tokens[parser.getPos()];
    throw new Error(`Unexpected token "${remaining.text}" at position ${remaining.start}. Expected end of query.`);
  }
  return query;
}
function isQueryValid(soql, options) {
  try {
    parseQuery(soql, options);
    return true;
  } catch (e) {
    return false;
  }
}

// src/utils.ts
function isString(val) {
  return typeof val === "string";
}
function isStringArray(val) {
  if (!val) {
    return false;
  }
  return val.every((item) => isString(item));
}
function isNumber(val) {
  return Number.isFinite(val);
}
function isNil(val) {
  return val === null || val === void 0;
}
function get(val, suffix, prefix) {
  return isNil(val) ? "" : `${prefix || ""}${val}${suffix || ""}`;
}
function getAsArrayStr(val, alwaysParens = false) {
  if (Array.isArray(val)) {
    if (val.length > 0) {
      return `(${val.join(", ")})`;
    } else {
      return alwaysParens ? "()" : "";
    }
  } else {
    return alwaysParens ? `(${val || ""})` : val || "";
  }
}
function generateParens(count, character, joinCharacter = "") {
  return isNumber(count) && count > 0 ? new Array(count).fill(character).join(joinCharacter) : "";
}
function getParams(functionFieldExp) {
  if (!functionFieldExp.parameters || functionFieldExp.parameters.length === 0) {
    return [];
  }
  if (isStringArray(functionFieldExp.parameters)) {
    return functionFieldExp.parameters;
  }
  if (isString(functionFieldExp.parameters[0])) {
    return [functionFieldExp.parameters[0]];
  }
  return getParams(functionFieldExp.parameters[0]);
}
function isNestedParamAggregateFunction(functionFieldExp) {
  if (!functionFieldExp.parameters || functionFieldExp.parameters.length === 0) {
    return false;
  }
  const parameter = functionFieldExp.parameters[0];
  if (isString(parameter)) {
    return false;
  }
  return !!parameter.isAggregateFn;
}
function hasAlias(value) {
  return value && !isNil(value.alias);
}
function isComposeField(input) {
  return isString(input.field) && !Array.isArray(input.relationships) && !Array.isArray(input.conditions);
}
function isComposeFieldFunction(input) {
  return !isNil(input.functionName || input.fn);
}
function isComposeFieldRelationship(input) {
  return isString(input.field) && Array.isArray(input.relationships);
}
function isComposeFieldSubquery(input) {
  return !isNil(input.subquery);
}
function isComposeFieldTypeof(input) {
  return isString(input.field) && Array.isArray(input.conditions);
}
function isSubquery(query) {
  return isString(query.relationshipName);
}
function isFieldSubquery(value) {
  return !!value && !!value.type && value.type === "FieldSubquery";
}
function isWhereClauseWithRightCondition(value) {
  return !!value && !!value.operator && !!value.right;
}
function isHavingClauseWithRightCondition(value) {
  return !!value && !!value.operator && !!value.right;
}
function isWhereOrHavingClauseWithRightCondition(value) {
  return !!value && !!value.operator && !!value.right;
}
function isValueCondition(value) {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.value);
}
function isValueWithDateLiteralCondition(value) {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.value) && (value.literalType === "DATE_LITERAL" || Array.isArray(value.literalType) && value.literalType[0] === "DATE_LITERAL");
}
function isValueWithDateNLiteralCondition(value) {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.value) && !isNil(value.dateLiteralVariable);
}
function isValueFunctionCondition(value) {
  return value && !isNil(value.fn) && isString(value.operator) && !isNil(value.value);
}
function isNegationCondition(value) {
  return value && isNumber(value.openParen) && isNil(value.operator) && isNil(value.field) && isNil(value.fn) && isNil(value.closeParen);
}
function isValueQueryCondition(value) {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.valueQuery) && isNil(value.value);
}
function isOrderByField(value) {
  return value && !isNil(value.field);
}
function isOrderByFn(value) {
  return value && !isNil(value.fn);
}
function isGroupByField(value) {
  return value && !isNil(value.field);
}
function isGroupByFn(value) {
  return value && !isNil(value.fn);
}
function isArrayOperator(operator) {
  return ["IN", "NOT IN", "INCLUDES", "EXCLUDES"].includes(operator);
}
function getWhereValue(value, literalType, operator) {
  if (isNil(literalType)) {
    return value;
  }
  if (operator && literalType !== "APEX_BIND_VARIABLE" && isArrayOperator(operator) && !Array.isArray(value)) {
    value = [value];
    literalType = Array.isArray(literalType) ? literalType : [literalType];
  }
  if (Array.isArray(literalType) && Array.isArray(value)) {
    return value.map((val, i) => {
      return whereValueHelper(val, literalType?.[i]);
    });
  } else {
    if (Array.isArray(literalType)) {
      literalType = literalType[0];
    }
    switch (literalType) {
      case "STRING": {
        if (Array.isArray(value)) {
          return value.filter(Boolean).map((val) => isString(val) && val.startsWith("'") ? val : `'${val ?? ""}'`);
        } else {
          value = String(value ?? "");
          return isString(value) && value.startsWith("'") ? value : `'${value ?? ""}'`;
        }
      }
      case "APEX_BIND_VARIABLE": {
        return `:${value}`;
      }
      default: {
        return value;
      }
    }
  }
}
function whereValueHelper(value, literalType) {
  switch (literalType) {
    case "STRING": {
      return isString(value) && value.startsWith("'") ? value : `'${value ?? ""}'`;
    }
    case "NULL": {
      return "null";
    }
    default: {
      return value;
    }
  }
}

// src/api/public-utils.ts
function getComposedField(input) {
  return getField(input);
}
function getField(input) {
  if (typeof input === "string") {
    return {
      type: "Field",
      field: input
    };
  } else if (isComposeFieldFunction(input)) {
    let parameters = [];
    if (input.parameters) {
      parameters = Array.isArray(input.parameters) ? input.parameters : [input.parameters];
    }
    return {
      type: "FieldFunctionExpression",
      functionName: input.functionName || input.fn,
      parameters,
      alias: input.alias
    };
  } else if (isComposeFieldRelationship(input)) {
    return {
      type: "FieldRelationship",
      field: input.field,
      relationships: input.relationships,
      objectPrefix: input.objectPrefix
    };
  } else if (isComposeFieldSubquery(input)) {
    return {
      type: "FieldSubquery",
      subquery: input.subquery
    };
  } else if (isComposeFieldTypeof(input)) {
    return {
      type: "FieldTypeof",
      field: input.field,
      conditions: input.conditions
    };
  } else if (isComposeField(input)) {
    return {
      type: "Field",
      field: input.field,
      objectPrefix: input.objectPrefix
    };
  } else {
    throw new TypeError("The input object provided did not match any valid field types");
  }
}
function getFlattenedFields(query, isAggregateResult) {
  if (!query) {
    return [];
  }
  query = isFieldSubquery(query) ? query.subquery : query;
  const fields = query.fields;
  if (!fields) {
    return [];
  }
  let groupByFields = {};
  if (!!query.groupBy) {
    groupByFields = (Array.isArray(query.groupBy) ? query.groupBy : [query.groupBy]).reduce(
      (output, clause) => {
        if (isGroupByField(clause)) {
          output[clause.field.toLocaleLowerCase()] = clause.field;
        }
        return output;
      },
      {}
    );
  }
  let currUnAliasedAggExp = -1;
  let sObject = (isSubquery(query) ? query.relationshipName : query.sObject || "").toLowerCase();
  let sObjectAlias = (query.sObjectAlias || "").toLowerCase();
  const parsedFields = fields.flatMap((field) => {
    switch (field.type) {
      case "Field": {
        return field.alias || field.field;
      }
      case "FieldFunctionExpression": {
        let params = getParams(field);
        params = params.map((param) => {
          if (param.includes(".")) {
            let tempParams = param.split(".");
            const firstParam = tempParams[0].toLowerCase();
            if (firstParam === sObjectAlias || firstParam === sObject) {
              tempParams = tempParams.slice(1);
            }
            return tempParams.join(".");
          }
          return param;
        });
        if (field.alias && (field.isAggregateFn || isAggregateResult)) {
          return field.alias;
        }
        if (field.alias) {
          const firstParam = params[0];
          if (firstParam.includes(".")) {
            params = firstParam.split(".").slice(0, -1);
            params.push(field.alias);
            return params.join(".");
          }
          return field.alias;
        }
        if (field.isAggregateFn || isNestedParamAggregateFunction(field) || isAggregateResult) {
          currUnAliasedAggExp++;
          return `expr${currUnAliasedAggExp}`;
        }
        if (params.length > 0) {
          return params.join(".");
        }
        return field.functionName;
      }
      case "FieldRelationship": {
        const firstRelationship = field.relationships[0].toLowerCase();
        if (hasAlias(field)) {
          return field.alias;
        }
        if (field.rawValue && groupByFields[field.rawValue.toLocaleLowerCase()]) {
          return field.field;
        }
        if (firstRelationship === sObjectAlias || firstRelationship === sObject) {
          return field.relationships.concat([field.field]).slice(1).join(".");
        }
        return field.relationships.concat([field.field]).join(".");
      }
      case "FieldSubquery": {
        return field.subquery.relationshipName;
      }
      case "FieldTypeof": {
        const priorFields = /* @__PURE__ */ new Set();
        const fields2 = [];
        field.conditions.forEach((condition) => {
          condition.fieldList.forEach((currField) => {
            if (!priorFields.has(currField)) {
              priorFields.add(currField);
              fields2.push(`${field.field}.${currField}`);
            }
          });
        });
        return fields2;
      }
      default:
        break;
    }
  }).filter((field) => isString(field));
  return parsedFields;
}

// src/formatter/formatter.ts
var Formatter = class {
  constructor(enabled, options) {
    this.currIndent = 1;
    this.enabled = enabled;
    this.options = {
      numIndent: options.numIndent ?? 1,
      fieldMaxLineLength: options.fieldMaxLineLength ?? 60,
      fieldSubqueryParensOnOwnLine: options.fieldSubqueryParensOnOwnLine ?? true,
      whereClauseOperatorsIndented: true,
      newLineAfterKeywords: options.newLineAfterKeywords ?? false,
      logging: options.logging ?? false
    };
    if (this.options.newLineAfterKeywords) {
      this.options.fieldSubqueryParensOnOwnLine = true;
    }
  }
  log(data) {
    if (this.options.logging) {
      console.log(data);
    }
  }
  getIndent(additionalIndent = 0) {
    return this.repeatChar((this.currIndent + additionalIndent) * (this.options.numIndent || 1), "	");
  }
  repeatChar(numTimes, char) {
    return new Array(numTimes).fill(char).join("");
  }
  setSubquery(isSubquery2) {
    this.currIndent = isSubquery2 ? this.currIndent += 1 : this.currIndent -= 1;
  }
  stepCurrIndex(num) {
    this.currIndent += num;
  }
  /**
   * Format fields
   * @param fieldData
   */
  formatFields(fieldData) {
    function trimPrevSuffix(currIdx) {
      if (fieldData.fields[currIdx - 1]) {
        fieldData.fields[currIdx - 1].suffix = fieldData.fields[currIdx - 1].suffix.trim();
      }
    }
    fieldData.fields.forEach((field, i) => {
      field.suffix = fieldData.fields.length - 1 === i ? "" : ", ";
    });
    if (this.enabled) {
      let lineLen = 0;
      let newLineAndIndentNext = false;
      fieldData.fields.forEach((field, i) => {
        if (field.isSubquery) {
          trimPrevSuffix(i);
          field.prefix = `
${this.getIndent()}`;
          field.suffix = fieldData.fields.length - 1 === i ? "" : ", ";
          lineLen = 0;
          newLineAndIndentNext = true;
        } else if (Array.isArray(field.typeOfClause)) {
          trimPrevSuffix(i);
          field.prefix = `
${this.getIndent()}`;
          newLineAndIndentNext = true;
        } else if (isNumber(this.options.fieldMaxLineLength)) {
          lineLen += field.text.length + field.suffix.length;
          if (lineLen > this.options.fieldMaxLineLength || newLineAndIndentNext) {
            trimPrevSuffix(i);
            if (!this.options.newLineAfterKeywords || i > 0) {
              field.prefix += `
${this.getIndent()}`;
            }
            lineLen = 0;
            newLineAndIndentNext = false;
          }
        }
        this.log(field);
      });
    }
  }
  formatTyeOfField(text, typeOfClause) {
    if (this.enabled && this.options.newLineAfterKeywords) {
      return typeOfClause.map((part, i) => {
        if (i === 0) {
          return part;
        } else if (i === typeOfClause.length - 1) {
          return `${this.getIndent()}${part}`;
        } else {
          return `${this.getIndent()}	${part}`;
        }
      }).join("\n");
    }
    return text;
  }
  formatTypeofFieldCondition(condition) {
    let output = "";
    const fields = condition.fieldList.join(", ");
    if (this.enabled && this.options.newLineAfterKeywords) {
      const indent = this.getIndent();
      output = `${condition.type}`;
      if (condition.objectType) {
        output += `
${indent}		${condition.objectType}
${indent}	THEN
${indent}		${fields}`;
      } else {
        output += `
${indent}		${fields}`;
      }
    } else {
      output = condition.type;
      if (condition.objectType) {
        output += ` ${condition.objectType} THEN ${fields}`;
      } else {
        output += ` ${fields}`;
      }
    }
    return output;
  }
  /**
   * Formats subquery with additional indents
   */
  formatSubquery(queryStr, numTabs = 2, incrementTabsWhereClauseOpIndent = false) {
    if (incrementTabsWhereClauseOpIndent) {
      numTabs++;
    }
    let leftParen = "(";
    let rightParen = ")";
    if (this.enabled) {
      if (this.options.fieldSubqueryParensOnOwnLine || this.options.newLineAfterKeywords) {
        queryStr = queryStr.replace(/\n/g, `
${this.repeatChar(numTabs, "	")}`);
        leftParen = `(
${this.repeatChar(numTabs, "	")}`;
        rightParen = `
${this.repeatChar(numTabs - 1, "	")})`;
      } else {
        queryStr = queryStr.replace(/\n/g, "\n	");
      }
    }
    return `${leftParen}${queryStr}${rightParen}`;
  }
  /**
   * Formats all clauses that do not have a more specialized format function
   * If formatting is enabled, then this will put a new line before the clause
   * @param clause
   * @returns clause
   */
  formatClause(clause) {
    if (this.enabled) {
      return this.options.newLineAfterKeywords ? `
${clause}
${this.getIndent()}` : `
${clause}`;
    }
    return ` ${clause}`;
  }
  /**
   * If newLineAfterKeywords is true, then no preceding space will be added
   * This is called after clauses
   * @param text
   * @returns text
   */
  formatText(text) {
    return this.enabled && (this.options.newLineAfterKeywords || text.startsWith("\n")) ? text : ` ${text}`;
  }
  formatWithIndent(text) {
    return this.enabled ? `${this.getIndent()}${text}` : text;
  }
  formatOrderByArray(groupBy) {
    if (this.enabled) {
      let currLen = 0;
      let output = "";
      groupBy.forEach((token, i) => {
        const nextToken = groupBy[i + 1];
        currLen += token.length;
        if (nextToken && (currLen + nextToken.length > (this.options.fieldMaxLineLength || 0) || this.options.newLineAfterKeywords)) {
          output += `${token},
	`;
          currLen = 0;
        } else {
          output += `${token}${nextToken ? ", " : ""}`;
        }
      });
      return output;
    } else {
      return groupBy.join(", ");
    }
  }
  /**
   * Formats parens
   * @param count
   * @param character
   * @param [leadingParenInline] Make the leading paren inline (last for "(" and first for ")") used for negation condition
   * @returns
   */
  formatParens(count, character, leadingParenInline = false) {
    let output = "";
    if (isNumber(count) && count > 0) {
      if (this.enabled) {
        if (character === "(") {
          for (let i = 0; i < count; i++) {
            if (leadingParenInline && i === count - 1) {
              output += "(";
            } else {
              if (i === 0) {
                output += "(\n";
              } else {
                this.currIndent++;
                output += `${this.getIndent()}(
`;
              }
            }
          }
          if (!leadingParenInline || count > 1) {
            this.currIndent++;
          }
        } else {
          for (let i = count - 1; i >= 0; i--) {
            if (leadingParenInline && i === count - 1) {
              output += ")";
            } else {
              this.currIndent--;
              output += `
${this.getIndent()})`;
            }
          }
        }
      } else {
        output += generateParens(count, character);
      }
    }
    return output;
  }
  formatWhereClauseOperators(operator, whereClause, additionalIndent = 0) {
    const skipNewLineAndIndent = operator === "NOT";
    if (this.enabled && !skipNewLineAndIndent) {
      return `
${this.getIndent(additionalIndent)}${operator} ${whereClause}`;
    } else {
      return `${skipNewLineAndIndent ? "" : " "}${operator} ${whereClause}`;
    }
  }
  formatAddNewLine(alt = " ", skipNewLineAndIndent) {
    return this.enabled && !skipNewLineAndIndent ? `
` : alt;
  }
};

// src/composer/composer.ts
function formatQuery(soql, formatOptions, parseOptions) {
  return composeQuery(parseQuery(soql, parseOptions), { format: true, formatOptions });
}
function composeQuery(soql, config = {}) {
  if (!soql) {
    return "";
  }
  config = config || {};
  config.format = config.format ? true : false;
  if (config.logging) {
    console.time("composer");
    console.log("Composing Query:", soql);
    console.log("Format output:", config.format);
  }
  const query = new Compose(soql, config).query;
  if (config.logging) {
    console.timeEnd("composer");
  }
  return query;
}
var Compose = class {
  constructor(soql, config = {}) {
    this.soql = soql;
    this.logging = false;
    this.format = false;
    config = { autoCompose: true, ...config };
    const { logging, format } = config;
    this.logging = !!logging;
    this.format = !!format;
    this.query = "";
    this.formatter = new Formatter(this.format, {
      logging: this.logging,
      ...config.formatOptions
    });
    if (config.autoCompose) {
      this.start();
    }
  }
  /**
   * Starts compose
   */
  start() {
    this.query = this.parseQuery(this.soql);
  }
  /**
   * If logging is enabled, print the query to the console
   * @param soql
   */
  log(soql) {
    if (this.logging) {
      console.log("Current SOQL:", soql);
    }
  }
  /**
   * Parses FunctionExp object
   * Prefers functionName if populated, otherwise will fallback to rawValue
   * @param fn
   * @returns fn
   */
  parseFn(fn) {
    let output;
    if (fn.rawValue) {
      output = fn.rawValue;
    } else {
      output = fn.functionName;
      output += `(${(fn.parameters || []).map((param) => isString(param) ? param : this.parseFn(param)).join(", ")})`;
    }
    if (fn.alias) {
      output += ` ${fn.alias}`;
    }
    return output;
  }
  /**
   * Parses query
   * Base entry point for the query
   * this may be called multiple times recursively for subqueries and WHERE queries
   * @param query
   * @returns query
   */
  parseQuery(query) {
    const fieldData = {
      fields: this.parseFields(query.fields || []).map((field) => ({
        text: field.text,
        typeOfClause: field.typeOfClause,
        isSubquery: field.text.startsWith("("),
        prefix: "",
        suffix: ""
      })),
      isSubquery: isSubquery(query),
      lineBreaks: []
    };
    let output = "";
    if (query.fields) {
      output += this.formatter.formatClause("SELECT").trimStart();
    }
    this.formatter.formatFields(fieldData);
    let fieldsOutput = "";
    fieldData.fields.forEach((field) => {
      if (Array.isArray(field.typeOfClause)) {
        fieldsOutput += `${field.prefix}${this.formatter.formatTyeOfField(field.text, field.typeOfClause)}${field.suffix}`;
      } else {
        fieldsOutput += `${field.prefix}${field.text}${field.suffix}`;
      }
    });
    output += this.formatter.formatText(fieldsOutput);
    if (!!(isSubquery(query) ? query.relationshipName : query.sObject)) {
      output += this.formatter.formatClause("FROM");
    }
    if (isSubquery(query)) {
      const sObjectPrefix = query.sObjectPrefix || [];
      sObjectPrefix.push(query.relationshipName);
      output += this.formatter.formatText(`${sObjectPrefix.join(".")}${get(query.sObjectAlias, "", " ")}`);
    } else if (query.sObject) {
      output += this.formatter.formatText(`${query.sObject}${get(query.sObjectAlias, "", " ")}`);
    }
    this.log(output);
    if (query.usingScope) {
      output += this.formatter.formatClause("USING SCOPE");
      output += this.formatter.formatText(query.usingScope);
      this.log(output);
    }
    if (query.where) {
      output += this.formatter.formatClause("WHERE");
      output += this.formatter.formatText(this.parseWhereOrHavingClause(query.where));
      this.log(output);
    }
    if (query.groupBy) {
      output += this.formatter.formatClause("GROUP BY");
      output += this.formatter.formatText(this.parseGroupByClause(query.groupBy));
      this.log(output);
      if (query.having) {
        output += this.formatter.formatClause("HAVING");
        output += this.formatter.formatText(this.parseWhereOrHavingClause(query.having));
        this.log(output);
      }
    }
    if (query.orderBy && (!Array.isArray(query.orderBy) || query.orderBy.length > 0)) {
      output += this.formatter.formatClause("ORDER BY");
      output += this.formatter.formatText(this.parseOrderBy(query.orderBy));
      this.log(output);
    }
    if (isNumber(query.limit)) {
      output += this.formatter.formatClause("LIMIT");
      output += this.formatter.formatText(`${query.limit}`);
      this.log(output);
    }
    if (isNumber(query.offset)) {
      output += this.formatter.formatClause("OFFSET");
      output += this.formatter.formatText(`${query.offset}`);
      this.log(output);
    }
    if (query.withDataCategory) {
      output += this.formatter.formatClause("WITH DATA CATEGORY");
      output += this.formatter.formatText(this.parseWithDataCategory(query.withDataCategory));
      this.log(output);
    }
    if (query.withSecurityEnforced) {
      output += this.formatter.formatClause("WITH SECURITY_ENFORCED");
      this.log(output);
    }
    if (query.withAccessLevel) {
      output += this.formatter.formatClause(`WITH ${query.withAccessLevel}`);
      this.log(output);
    }
    if (query.for) {
      output += this.formatter.formatClause("FOR");
      output += this.formatter.formatText(query.for);
      this.log(output);
    }
    if (query.update) {
      output += this.formatter.formatClause("UPDATE");
      output += this.formatter.formatText(query.update);
      this.log(output);
    }
    return output.trim();
  }
  /**
   * Parses fields
   * e.x.: SELECT amount, FORMAT(amount) Amt, (SELECT Id, Name FROM Contacts)
   * @param fields
   * @returns fields
   */
  parseFields(fields) {
    return fields.map((field) => {
      let text = "";
      let typeOfClause;
      const objPrefix = field.objectPrefix ? `${field.objectPrefix}.` : "";
      switch (field.type) {
        case "Field": {
          text = `${objPrefix}${field.field}${field.alias ? ` ${field.alias}` : ""}`;
          break;
        }
        case "FieldFunctionExpression": {
          let params = "";
          if (field.parameters) {
            params = field.parameters.map((param) => isString(param) ? param : this.parseFields([param]).map((param2) => param2.text)).join(", ");
          }
          text = `${field.functionName}(${params})${field.alias ? ` ${field.alias}` : ""}`;
          break;
        }
        case "FieldRelationship": {
          text = `${objPrefix}${field.relationships.join(".")}.${field.field}${hasAlias(field) ? ` ${field.alias}` : ""}`;
          break;
        }
        case "FieldSubquery": {
          text = this.formatter.formatSubquery(this.parseQuery(field.subquery));
          break;
        }
        case "FieldTypeof": {
          typeOfClause = this.parseTypeOfField(field);
          text = typeOfClause.join(" ");
          break;
        }
        default:
          break;
      }
      return { text, typeOfClause };
    });
  }
  /**
   * Parses type of Field
   * e.x.: TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name
   * @param typeOfField
   * @returns type of field
   */
  parseTypeOfField(typeOfField) {
    const output = [`TYPEOF ${typeOfField.field}`].concat(
      typeOfField.conditions.map((condition) => this.formatter.formatTypeofFieldCondition(condition))
    );
    output.push(`END`);
    return output;
  }
  /**
   * Parses where clause
   * e.x.: WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z
   * WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
   * @param where
   * @param priorIsNegationOperator - do not set this when calling manually. Recursive call will set this to ensure proper formatting.
   * @returns where clause
   */
  parseWhereOrHavingClause(whereOrHaving, tabOffset = 0, priorConditionIsNegation = false) {
    let output = "";
    const left = whereOrHaving.left;
    let trimPrecedingOutput = false;
    if (left) {
      output += this.formatter.formatParens(left.openParen, "(", isNegationCondition(left));
      if (!isNegationCondition(left)) {
        tabOffset = tabOffset + (left.openParen || 0) - (left.closeParen || 0);
        if (priorConditionIsNegation) {
          tabOffset++;
        }
        let expression = "";
        expression += isValueFunctionCondition(left) ? this.parseFn(left.fn) : left.field;
        expression += ` ${left.operator} `;
        if (isValueQueryCondition(left)) {
          expression += this.formatter.formatSubquery(this.parseQuery(left.valueQuery), 1, true);
        } else {
          expression += getAsArrayStr(getWhereValue(left.value, left.literalType, left.operator));
        }
        output += this.formatter.formatWithIndent(expression);
        output += this.formatter.formatParens(left.closeParen, ")", priorConditionIsNegation);
      }
    }
    if (isWhereOrHavingClauseWithRightCondition(whereOrHaving)) {
      const operator = get(whereOrHaving.operator);
      trimPrecedingOutput = operator === "NOT";
      const formattedData = this.formatter.formatWhereClauseOperators(
        operator,
        this.parseWhereOrHavingClause(whereOrHaving.right, tabOffset, isNegationCondition(left)),
        tabOffset
      );
      return `${trimPrecedingOutput ? output.trimRight() : output}${formattedData}`.trim();
    } else {
      return output.trim();
    }
  }
  /**
   * Parses group by clause
   * e.x.: GROUP BY CampaignId
   * @param groupBy
   * @returns group by clause
   */
  parseGroupByClause(groupBy) {
    return (Array.isArray(groupBy) ? groupBy : [groupBy]).map((clause) => isGroupByField(clause) ? clause.field : this.parseFn(clause.fn)).join(", ");
  }
  /**
   * Parses order by
   * e.x.: ORDER BY BillingPostalCode ASC NULLS LAST
   * @param orderBy
   * @returns order by
   */
  parseOrderBy(orderBy) {
    if (Array.isArray(orderBy)) {
      return this.formatter.formatOrderByArray(orderBy.map((ob) => this.parseOrderBy(ob)));
    } else {
      let output = "";
      if (isOrderByField(orderBy)) {
        output = `${get(orderBy.field, " ")}`;
      } else {
        output += `${this.parseFn(orderBy.fn)} `;
      }
      output += `${get(orderBy.order, " ")}${get(orderBy.nulls, "", "NULLS ")}`;
      return output.trim();
    }
  }
  /**
   * Parses with data category
   * e.x.: WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)
   * @param withDataCategory
   * @returns with data category
   */
  parseWithDataCategory(withDataCategory) {
    return withDataCategory.conditions.map((condition) => {
      const params = condition.parameters.length > 1 ? `(${condition.parameters.join(", ")})` : `${condition.parameters.join(", ")}`;
      return `${condition.groupName} ${condition.selector} ${params}`;
    }).join(" AND ");
  }
};
export {
  Compose,
  TokenKind,
  composeQuery,
  formatQuery,
  getComposedField,
  getField,
  getFlattenedFields,
  hasAlias,
  isAggregateFunction,
  isDateFunction,
  isDateLiteral,
  isDateNLiteral,
  isDecimalNumberLiteral,
  isFieldSubquery,
  isFieldsFunction,
  isFieldsFunctionParam,
  isGroupByField,
  isGroupByFn,
  isHavingClauseWithRightCondition,
  isIdentifierLike,
  isIntegerNumberLiteral,
  isLocationFunction,
  isNegationCondition,
  isNumberLiteral,
  isOrderByField,
  isOrderByFn,
  isOtherFunction,
  isQueryValid,
  isRelationalOperator,
  isString,
  isSubquery,
  isUsingScopeEnumeration,
  isValueCondition,
  isValueFunctionCondition,
  isValueQueryCondition,
  isValueWithDateLiteralCondition,
  isValueWithDateNLiteralCondition,
  isWhereClauseWithRightCondition,
  isWhereOrHavingClauseWithRightCondition,
  parseQuery,
  tokenTypeName,
  tokenize
};
