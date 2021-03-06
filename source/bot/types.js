// @flow

/** Represents a GraphQL query */
export type GraphQLQuery = string
/** An API Token ( or maybe a JWT in the future? ) */
export type APIToken = string

/**
 * The fb/artsy user context for recieving/sending messages.
 * If you have a `userID`, there should be a `userToken`.
 * No functions, needs to be storable in db.
 */
export interface MitosisUser {
  /** Guest Xapp token */
  xappToken?: APIToken,
  /** To re-auth with a user-token we need to re-use this key */
  artsyOauthAppCode?: string,
  /** Logged in user OAuth2 token */
  userToken?: APIToken,
  /** the Facebook chat sender ID */
  fbSenderID: string,
  /** the corresponding Artsy User ID */
  artsyUserID?: string,
  /** Does the user want to get articles sent every 2 days? */
  subscribeToArticlesBiDaily: boolean,
  /** What time, in GMT should we send them articles? */
  renderedGMTTimeForArticles?: number,
  /** Name to use _occasionally_ - I personally get annoyed if a services always uses my name */
  firstName: string,
  /** Timezone from facebook */
  timezoneOffset: number,
  /** last City chosen */
  favouriteCitySlug?: string,
  /** Artsy location city */
  artsyLocationCitySlug?: string
}
