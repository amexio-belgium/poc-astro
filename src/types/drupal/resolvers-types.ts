import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Email: { input: any; output: any; }
  Html: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  UntypedStructuredData: { input: any; output: any; }
  UserRoles: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
};

/** A paginated set of results. */
export type Connection = {
  /** The edges of this connection. */
  edges: Array<Edge>;
  /** The nodes of the edges of this connection. */
  nodes: Array<EdgeNode>;
  /** Information to aid in pagination. */
  pageInfo: ConnectionPageInfo;
};

/** Information about the page in a connection. */
export type ConnectionPageInfo = {
  __typename?: 'ConnectionPageInfo';
  /** The cursor for the last element in this page. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** Whether there are more pages in this connection. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Whether there are previous pages in this connection. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** The cursor for the first element in this page. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** Choose how your sorts will occur and on which field. */
export enum ConnectionSortKeys {
  /** Sort by creation date */
  CreatedAt = 'CREATED_AT',
  /** Sort by promoted status. */
  Promoted = 'PROMOTED',
  /** Sort by sticky status. */
  Sticky = 'STICKY',
  /** Sort by entity title. */
  Title = 'TITLE',
  /** Sort by updated date */
  UpdatedAt = 'UPDATED_AT'
}

/** A DateTime object. */
export type DateTime = {
  __typename?: 'DateTime';
  /** A string that will have a value of format ±hh:mm */
  offset: Scalars['UtcOffset']['output'];
  /** RFC 3339 compliant time string. */
  time: Scalars['Time']['output'];
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  timestamp: Scalars['Timestamp']['output'];
  /** A field whose value exists in the standard IANA Time Zone Database. */
  timezone: Scalars['TimeZone']['output'];
};

/**
 * An edge in a connection.
 * Provides the cursor to fetch data based on the position of the associated
 * node. Specific edge implementations may provide more information about the
 * relationship they represent.
 */
export type Edge = {
  cursor: Scalars['Cursor']['output'];
  node: EdgeNode;
};

/** This entity is accessible over an Edge connection. */
export type EdgeNode = {
  id: Scalars['ID']['output'];
};

/** A file object to represent an managed file. */
export type File = {
  __typename?: 'File';
  /** The description of the file. */
  description?: Maybe<Scalars['String']['output']>;
  /** Het MIME-type van het bestand. */
  mime?: Maybe<Scalars['String']['output']>;
  /** De naam van het bestand. */
  name?: Maybe<Scalars['String']['output']>;
  /** Grootte van het bestand in bytes. */
  size: Scalars['Int']['output'];
  /** The URL of the file. */
  url: Scalars['String']['output'];
};

/** A image object to represent an managed file. */
export type Image = {
  __typename?: 'Image';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The height of the image. */
  height: Scalars['Int']['output'];
  /** The mime type of the image. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The size of the image in bytes. */
  size: Scalars['Int']['output'];
  /** The title text of the image. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
  /** The width of the image. */
  width: Scalars['Int']['output'];
};

/** Generic untyped input for key-value pairs. */
export type KeyValueInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A language definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  /** The language direction. */
  direction?: Maybe<Scalars['String']['output']>;
  /** De taalcode. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** A link. */
export type Link = {
  __typename?: 'Link';
  /** Whether the link is internal to this website. */
  internal: Scalars['Boolean']['output'];
  /** De titel van de link. */
  title?: Maybe<Scalars['String']['output']>;
  /** De URL van de link. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Gebruik lokale afbeeldingen voor herbruikbare media. */
export type MediaImage = EdgeNode & MediaInterface & {
  __typename?: 'MediaImage';
  /** Tijdstip waarop het media-item het laatst bewerkt is. */
  changed: DateTime;
  /** Tijdstip waarop het media-item gemaakt is. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Taal */
  langcode: Language;
  /** Afbeelding */
  mediaImage: Image;
  /** Naam */
  name: Scalars['String']['output'];
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for MediaImage. */
export type MediaImageConnection = Connection & {
  __typename?: 'MediaImageConnection';
  edges: Array<MediaImageEdge>;
  nodes: Array<MediaImage>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for MediaImage. */
export type MediaImageEdge = Edge & {
  __typename?: 'MediaImageEdge';
  cursor: Scalars['Cursor']['output'];
  node: MediaImage;
};

/** Entity type media. */
export type MediaInterface = {
  /** Tijdstip waarop het media-item het laatst bewerkt is. */
  changed: DateTime;
  /** Tijdstip waarop het media-item gemaakt is. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Taal */
  langcode: Language;
  /** Naam */
  name: Scalars['String']['output'];
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** Een externe video van YouTube of Vimeo. */
export type MediaRemoteVideo = EdgeNode & MediaInterface & {
  __typename?: 'MediaRemoteVideo';
  /** Tijdstip waarop het media-item het laatst bewerkt is. */
  changed: DateTime;
  /** Tijdstip waarop het media-item gemaakt is. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Taal */
  langcode: Language;
  /** Video URL */
  mediaOembedVideo: Scalars['String']['output'];
  /** Naam */
  name: Scalars['String']['output'];
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for MediaRemoteVideo. */
export type MediaRemoteVideoConnection = Connection & {
  __typename?: 'MediaRemoteVideoConnection';
  edges: Array<MediaRemoteVideoEdge>;
  nodes: Array<MediaRemoteVideo>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for MediaRemoteVideo. */
export type MediaRemoteVideoEdge = Edge & {
  __typename?: 'MediaRemoteVideoEdge';
  cursor: Scalars['Cursor']['output'];
  node: MediaRemoteVideo;
};

/** Entity type media. */
export type MediaUnion = MediaImage | MediaRemoteVideo | MediaVideo;

/** Een videobestand gehost op deze website. */
export type MediaVideo = EdgeNode & MediaInterface & {
  __typename?: 'MediaVideo';
  /** Tijdstip waarop het media-item het laatst bewerkt is. */
  changed: DateTime;
  /** Tijdstip waarop het media-item gemaakt is. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Taal */
  langcode: Language;
  /** Filmbestand */
  mediaVideoFile: File;
  /** Naam */
  name: Scalars['String']['output'];
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for MediaVideo. */
export type MediaVideoConnection = Connection & {
  __typename?: 'MediaVideoConnection';
  edges: Array<MediaVideoEdge>;
  nodes: Array<MediaVideo>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for MediaVideo. */
export type MediaVideoEdge = Edge & {
  __typename?: 'MediaVideoEdge';
  cursor: Scalars['Cursor']['output'];
  node: MediaVideo;
};

/** A GraphQL mutation is a request that changes data on the server. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder field to enable schema mutation extension. */
  _: Scalars['Boolean']['output'];
};

/** Entity type node. */
export type NodeInterface = {
  /** The author of this content. */
  author?: Maybe<User>;
  /** Het tijdstip waarop de node voor het laatst werd bewerkt. */
  changed: DateTime;
  /** Datum en tijdstip waarop de inhoud gemaakt is. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Taal */
  langcode: Language;
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Aangeraden op de voorpagina */
  promote: Scalars['Boolean']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** Vastgeplakt bovenaan de lijst */
  sticky: Scalars['Boolean']['output'];
  /** Titel */
  title: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** Gebruik <em>eenvoudige pagina's</em> voor vaste inhoud, zoals een 'Over ons'-pagina. */
export type NodePage = EdgeNode & NodeInterface & {
  __typename?: 'NodePage';
  /** The author of this content. */
  author?: Maybe<User>;
  /** Inhoud */
  body?: Maybe<TextSummary>;
  /** Het tijdstip waarop de node voor het laatst werd bewerkt. */
  changed: DateTime;
  /** Datum en tijdstip waarop de inhoud gemaakt is. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Taal */
  langcode: Language;
  /** Afbeelding */
  mediaImage?: Maybe<MediaUnion>;
  /** Paragrafen */
  paragraphs?: Maybe<Array<ParagraphUnion>>;
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Aangeraden op de voorpagina */
  promote: Scalars['Boolean']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** Vastgeplakt bovenaan de lijst */
  sticky: Scalars['Boolean']['output'];
  /** Titel */
  title: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
  /** Standaard Header Tonen */
  verbergStandaardHeader?: Maybe<Scalars['Boolean']['output']>;
};

/** A paginated set of results for NodePage. */
export type NodePageConnection = Connection & {
  __typename?: 'NodePageConnection';
  edges: Array<NodePageEdge>;
  nodes: Array<NodePage>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodePage. */
export type NodePageEdge = Edge & {
  __typename?: 'NodePageEdge';
  cursor: Scalars['Cursor']['output'];
  node: NodePage;
};

/** Entity type node. */
export type NodeUnion = NodePage;

/** Een banner met 2 knoppen, even verdeeld over de pagina. */
export type ParagraphBanner5050 = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphBanner5050';
  /** Buttons */
  buttons: Array<ParagraphUnion>;
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphBanner5050. */
export type ParagraphBanner5050Connection = Connection & {
  __typename?: 'ParagraphBanner5050Connection';
  edges: Array<ParagraphBanner5050Edge>;
  nodes: Array<ParagraphBanner5050>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphBanner5050. */
export type ParagraphBanner5050Edge = Edge & {
  __typename?: 'ParagraphBanner5050Edge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphBanner5050;
};

/** Een banner met maximaal 3 knoppen, getoond als kaart. */
export type ParagraphBannerCard = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphBannerCard';
  /** Cards */
  cards: Array<ParagraphUnion>;
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphBannerCard. */
export type ParagraphBannerCardConnection = Connection & {
  __typename?: 'ParagraphBannerCardConnection';
  edges: Array<ParagraphBannerCardEdge>;
  nodes: Array<ParagraphBannerCard>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphBannerCard. */
export type ParagraphBannerCardEdge = Edge & {
  __typename?: 'ParagraphBannerCardEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphBannerCard;
};

/** Een banner over de volledige breedte. */
export type ParagraphBannerFull = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphBannerFull';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** Beschrijving */
  description?: Maybe<Text>;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Afbeelding */
  imagebannerfull?: Maybe<MediaUnion>;
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Link */
  link?: Maybe<Link>;
  /** Link Knop Tekst */
  linkKnopTekst: Scalars['String']['output'];
  /** Titel */
  title?: Maybe<Scalars['String']['output']>;
  /** Uitlijning */
  uitlijning?: Maybe<Scalars['String']['output']>;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphBannerFull. */
export type ParagraphBannerFullConnection = Connection & {
  __typename?: 'ParagraphBannerFullConnection';
  edges: Array<ParagraphBannerFullEdge>;
  nodes: Array<ParagraphBannerFull>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphBannerFull. */
export type ParagraphBannerFullEdge = Edge & {
  __typename?: 'ParagraphBannerFullEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphBannerFull;
};

/** Een banner met een lijst van maximaal 5 knoppen, getoond als icoontjes. */
export type ParagraphBannerIcon = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphBannerIcon';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** Icoontjes */
  icons?: Maybe<Array<ParagraphUnion>>;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphBannerIcon. */
export type ParagraphBannerIconConnection = Connection & {
  __typename?: 'ParagraphBannerIconConnection';
  edges: Array<ParagraphBannerIconEdge>;
  nodes: Array<ParagraphBannerIcon>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphBannerIcon. */
export type ParagraphBannerIconEdge = Edge & {
  __typename?: 'ParagraphBannerIconEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphBannerIcon;
};

/** Een banner met maximaal 3 knoppen, getoond als tegels. */
export type ParagraphBannerTile = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphBannerTile';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Tegels */
  tiles: Array<ParagraphUnion>;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphBannerTile. */
export type ParagraphBannerTileConnection = Connection & {
  __typename?: 'ParagraphBannerTileConnection';
  edges: Array<ParagraphBannerTileEdge>;
  nodes: Array<ParagraphBannerTile>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphBannerTile. */
export type ParagraphBannerTileEdge = Edge & {
  __typename?: 'ParagraphBannerTileEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphBannerTile;
};

/** Entity type paragraph. */
export type ParagraphButton = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphButton';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** Beschrijving */
  description?: Maybe<Text>;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Afbeelding */
  image: MediaUnion;
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Link */
  link: Link;
  /** Titel */
  title: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphButton. */
export type ParagraphButtonConnection = Connection & {
  __typename?: 'ParagraphButtonConnection';
  edges: Array<ParagraphButtonEdge>;
  nodes: Array<ParagraphButton>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphButton. */
export type ParagraphButtonEdge = Edge & {
  __typename?: 'ParagraphButtonEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphButton;
};

/** Gebruik deze component voor het embedden van externe inhoud (e.g. kaarten). */
export type ParagraphEmbed = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphEmbed';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** Embed */
  embed?: Maybe<Text>;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphEmbed. */
export type ParagraphEmbedConnection = Connection & {
  __typename?: 'ParagraphEmbedConnection';
  edges: Array<ParagraphEmbedEdge>;
  nodes: Array<ParagraphEmbed>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphEmbed. */
export type ParagraphEmbedEdge = Edge & {
  __typename?: 'ParagraphEmbedEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphEmbed;
};

/** Entity type paragraph. */
export type ParagraphGeneriek = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphGeneriek';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** items */
  items?: Maybe<Array<ParagraphUnion>>;
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphGeneriek. */
export type ParagraphGeneriekConnection = Connection & {
  __typename?: 'ParagraphGeneriekConnection';
  edges: Array<ParagraphGeneriekEdge>;
  nodes: Array<ParagraphGeneriek>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphGeneriek. */
export type ParagraphGeneriekEdge = Edge & {
  __typename?: 'ParagraphGeneriekEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphGeneriek;
};

/** Pagina hoofding met hero afbeelding. */
export type ParagraphHeader = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphHeader';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Selecteer een hero afbeelding, deze zal worden weergegeven over de volledige breedte. */
  image: MediaUnion;
  /** Knoppen */
  knoppen?: Maybe<Array<ParagraphUnion>>;
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Titel */
  title?: Maybe<Scalars['String']['output']>;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphHeader. */
export type ParagraphHeaderConnection = Connection & {
  __typename?: 'ParagraphHeaderConnection';
  edges: Array<ParagraphHeaderEdge>;
  nodes: Array<ParagraphHeader>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphHeader. */
export type ParagraphHeaderEdge = Edge & {
  __typename?: 'ParagraphHeaderEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphHeader;
};

/** Entity type paragraph. */
export type ParagraphIcon = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphIcon';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Afbeelding */
  image: MediaUnion;
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Link */
  link: Link;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphIcon. */
export type ParagraphIconConnection = Connection & {
  __typename?: 'ParagraphIconConnection';
  edges: Array<ParagraphIconEdge>;
  nodes: Array<ParagraphIcon>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphIcon. */
export type ParagraphIconEdge = Edge & {
  __typename?: 'ParagraphIconEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphIcon;
};

/** Entity type paragraph. */
export type ParagraphInterface = {
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** Entity type paragraph. */
export type ParagraphTeaser = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphTeaser';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Referentie */
  reference: Array<NodeUnion>;
  /** Type */
  type: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphTeaser. */
export type ParagraphTeaserConnection = Connection & {
  __typename?: 'ParagraphTeaserConnection';
  edges: Array<ParagraphTeaserEdge>;
  nodes: Array<ParagraphTeaser>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphTeaser. */
export type ParagraphTeaserEdge = Edge & {
  __typename?: 'ParagraphTeaserEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphTeaser;
};

/** Een tekstparagraaf met opmaak. */
export type ParagraphText = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphText';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Text */
  text?: Maybe<TextSummary>;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphText. */
export type ParagraphTextConnection = Connection & {
  __typename?: 'ParagraphTextConnection';
  edges: Array<ParagraphTextEdge>;
  nodes: Array<ParagraphText>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphText. */
export type ParagraphTextEdge = Edge & {
  __typename?: 'ParagraphTextEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphText;
};

/** Entity type paragraph. */
export type ParagraphUnion = ParagraphBanner5050 | ParagraphBannerCard | ParagraphBannerFull | ParagraphBannerIcon | ParagraphBannerTile | ParagraphButton | ParagraphEmbed | ParagraphGeneriek | ParagraphHeader | ParagraphIcon | ParagraphTeaser | ParagraphText | ParagraphVideo | ParagraphVideobanner;

/** Entity type paragraph. */
export type ParagraphVideo = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphVideo';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Text */
  text?: Maybe<TextSummary>;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
  /** Video */
  video?: Maybe<MediaUnion>;
};

/** A paginated set of results for ParagraphVideo. */
export type ParagraphVideoConnection = Connection & {
  __typename?: 'ParagraphVideoConnection';
  edges: Array<ParagraphVideoEdge>;
  nodes: Array<ParagraphVideo>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphVideo. */
export type ParagraphVideoEdge = Edge & {
  __typename?: 'ParagraphVideoEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphVideo;
};

/** 50/50 Banner met uitleg tekst en video */
export type ParagraphVideobanner = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphVideobanner';
  /** Beschrijving */
  beschrijving: Text;
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Titel */
  titel: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
  /** Video Url */
  videoUrl?: Maybe<MediaUnion>;
};

/** A paginated set of results for ParagraphVideobanner. */
export type ParagraphVideobannerConnection = Connection & {
  __typename?: 'ParagraphVideobannerConnection';
  edges: Array<ParagraphVideobannerEdge>;
  nodes: Array<ParagraphVideobanner>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphVideobanner. */
export type ParagraphVideobannerEdge = Edge & {
  __typename?: 'ParagraphVideobannerEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphVideobanner;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type Query = {
  __typename?: 'Query';
  /** Schema information. */
  info: SchemaInformation;
  /** Load a Media entity by id. */
  media?: Maybe<MediaUnion>;
  /** List of all MediaImage on the platform. */
  mediaImages: MediaImageConnection;
  /** List of all MediaRemoteVideo on the platform. */
  mediaRemoteVideos: MediaRemoteVideoConnection;
  /** List of all MediaVideo on the platform. */
  mediaVideos: MediaVideoConnection;
  /** Load a Node entity by id. */
  node?: Maybe<NodeUnion>;
  /** List of all NodePage on the platform. */
  nodePages: NodePageConnection;
  /** Load a Paragraph entity by id. */
  paragraph?: Maybe<ParagraphUnion>;
  /** List of all ParagraphBanner5050 on the platform. */
  paragraphBanner5050s: ParagraphBanner5050Connection;
  /** List of all ParagraphBannerCard on the platform. */
  paragraphBannerCards: ParagraphBannerCardConnection;
  /** List of all ParagraphBannerFull on the platform. */
  paragraphBannerFulls: ParagraphBannerFullConnection;
  /** List of all ParagraphBannerIcon on the platform. */
  paragraphBannerIcons: ParagraphBannerIconConnection;
  /** List of all ParagraphBannerTile on the platform. */
  paragraphBannerTiles: ParagraphBannerTileConnection;
  /** List of all ParagraphButton on the platform. */
  paragraphButtons: ParagraphButtonConnection;
  /** List of all ParagraphEmbed on the platform. */
  paragraphEmbeds: ParagraphEmbedConnection;
  /** List of all ParagraphGeneriek on the platform. */
  paragraphGenerieks: ParagraphGeneriekConnection;
  /** List of all ParagraphHeader on the platform. */
  paragraphHeaders: ParagraphHeaderConnection;
  /** List of all ParagraphIcon on the platform. */
  paragraphIcons: ParagraphIconConnection;
  /** List of all ParagraphTeaser on the platform. */
  paragraphTeasers: ParagraphTeaserConnection;
  /** List of all ParagraphText on the platform. */
  paragraphTexts: ParagraphTextConnection;
  /** List of all ParagraphVideobanner on the platform. */
  paragraphVideobanners: ParagraphVideobannerConnection;
  /** List of all ParagraphVideo on the platform. */
  paragraphVideos: ParagraphVideoConnection;
  /** Load a User entity by id. */
  user?: Maybe<User>;
  /** List of all User on the platform. */
  users: UserConnection;
  /** Get information about the currently authenticated user. NULL if not logged in. */
  viewer?: Maybe<User>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryMediaArgs = {
  id: Scalars['ID']['input'];
  langcode?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryMediaImagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryMediaRemoteVideosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryMediaVideosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  langcode?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryNodePagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphArgs = {
  id: Scalars['ID']['input'];
  langcode?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphBanner5050sArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphBannerCardsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphBannerFullsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphBannerIconsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphBannerTilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphButtonsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphEmbedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphGenerieksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphHeadersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphIconsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphTeasersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphTextsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphVideobannersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryParagraphVideosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
  langcode?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  langcode?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/** Schema information provided by the system. */
export type SchemaInformation = {
  __typename?: 'SchemaInformation';
  /** The schema description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The internal path to the front page. */
  home?: Maybe<Scalars['String']['output']>;
  /** The schema version. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Sort direction. */
export enum SortDirection {
  /** Oplopend */
  Asc = 'ASC',
  /** Aflopend */
  Desc = 'DESC'
}

/** A processed text format defined by the CMS. */
export type Text = {
  __typename?: 'Text';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A processed text format with summary defined by the CMS. */
export type TextSummary = {
  __typename?: 'TextSummary';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The processed text summary. */
  summary?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export type UnsupportedType = {
  __typename?: 'UnsupportedType';
  /** Unsupported type, always TRUE. */
  unsupported?: Maybe<Scalars['Boolean']['output']>;
};

/** Entity type user. */
export type User = EdgeNode & UserInterface & {
  __typename?: 'User';
  /** Het tijdstip waarop de gebruiker voor het laatst is bewerkt. */
  changed: DateTime;
  /** Het tijdstip waarop de gebruiker is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Het e-mailadres van deze gebruiker. */
  mail?: Maybe<Scalars['Email']['output']>;
  /** De naam van deze gebruiker. */
  name: Scalars['String']['output'];
  /** De rollen van deze gebruiker. */
  roles?: Maybe<Array<Scalars['UserRoles']['output']>>;
  /** Of de gebruiker actief of geblokkeerd is. */
  status: UserStatus;
  /** Uw foto of afbeelding. */
  userPicture?: Maybe<Image>;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for User. */
export type UserConnection = Connection & {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for User. */
export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['Cursor']['output'];
  node: User;
};

/** Entity type user. */
export type UserInterface = {
  /** Het tijdstip waarop de gebruiker voor het laatst is bewerkt. */
  changed: DateTime;
  /** Het tijdstip waarop de gebruiker is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Het e-mailadres van deze gebruiker. */
  mail?: Maybe<Scalars['Email']['output']>;
  /** De naam van deze gebruiker. */
  name: Scalars['String']['output'];
  /** De rollen van deze gebruiker. */
  roles?: Maybe<Array<Scalars['UserRoles']['output']>>;
  /** Of de gebruiker actief of geblokkeerd is. */
  status: UserStatus;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** Of de gebruiker actief of geblokkeerd is. */
export enum UserStatus {
  /** An active user is able to login on the platform and view content */
  Active = 'ACTIVE',
  /** A blocked user is unable to access the platform, although their content will still be visible until it's deleted. */
  Blocked = 'BLOCKED'
}

/** Entity type user. */
export type UserUnion = User;



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  MediaUnion: ( MediaImage ) | ( MediaRemoteVideo ) | ( MediaVideo );
  NodeUnion: ( Omit<NodePage, 'mediaImage' | 'paragraphs'> & { mediaImage?: Maybe<RefType['MediaUnion']>, paragraphs?: Maybe<Array<RefType['ParagraphUnion']>> } );
  ParagraphUnion: ( Omit<ParagraphBanner5050, 'buttons'> & { buttons: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphBannerCard, 'cards'> & { cards: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphBannerFull, 'imagebannerfull'> & { imagebannerfull?: Maybe<RefType['MediaUnion']> } ) | ( Omit<ParagraphBannerIcon, 'icons'> & { icons?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphBannerTile, 'tiles'> & { tiles: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphButton, 'image'> & { image: RefType['MediaUnion'] } ) | ( ParagraphEmbed ) | ( Omit<ParagraphGeneriek, 'items'> & { items?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphHeader, 'image' | 'knoppen'> & { image: RefType['MediaUnion'], knoppen?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphIcon, 'image'> & { image: RefType['MediaUnion'] } ) | ( Omit<ParagraphTeaser, 'reference'> & { reference: Array<RefType['NodeUnion']> } ) | ( ParagraphText ) | ( Omit<ParagraphVideo, 'video'> & { video?: Maybe<RefType['MediaUnion']> } ) | ( Omit<ParagraphVideobanner, 'videoUrl'> & { videoUrl?: Maybe<RefType['MediaUnion']> } );
  UserUnion: ( User );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Connection: ( MediaImageConnection ) | ( MediaRemoteVideoConnection ) | ( MediaVideoConnection ) | ( NodePageConnection ) | ( ParagraphBanner5050Connection ) | ( ParagraphBannerCardConnection ) | ( ParagraphBannerFullConnection ) | ( ParagraphBannerIconConnection ) | ( ParagraphBannerTileConnection ) | ( ParagraphButtonConnection ) | ( ParagraphEmbedConnection ) | ( ParagraphGeneriekConnection ) | ( ParagraphHeaderConnection ) | ( ParagraphIconConnection ) | ( ParagraphTeaserConnection ) | ( ParagraphTextConnection ) | ( ParagraphVideoConnection ) | ( ParagraphVideobannerConnection ) | ( UserConnection );
  Edge: ( MediaImageEdge ) | ( MediaRemoteVideoEdge ) | ( MediaVideoEdge ) | ( NodePageEdge ) | ( ParagraphBanner5050Edge ) | ( ParagraphBannerCardEdge ) | ( ParagraphBannerFullEdge ) | ( ParagraphBannerIconEdge ) | ( ParagraphBannerTileEdge ) | ( ParagraphButtonEdge ) | ( ParagraphEmbedEdge ) | ( ParagraphGeneriekEdge ) | ( ParagraphHeaderEdge ) | ( ParagraphIconEdge ) | ( ParagraphTeaserEdge ) | ( ParagraphTextEdge ) | ( ParagraphVideoEdge ) | ( ParagraphVideobannerEdge ) | ( UserEdge );
  EdgeNode: ( MediaImage ) | ( MediaRemoteVideo ) | ( MediaVideo ) | ( Omit<NodePage, 'mediaImage' | 'paragraphs'> & { mediaImage?: Maybe<RefType['MediaUnion']>, paragraphs?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphBanner5050, 'buttons'> & { buttons: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphBannerCard, 'cards'> & { cards: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphBannerFull, 'imagebannerfull'> & { imagebannerfull?: Maybe<RefType['MediaUnion']> } ) | ( Omit<ParagraphBannerIcon, 'icons'> & { icons?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphBannerTile, 'tiles'> & { tiles: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphButton, 'image'> & { image: RefType['MediaUnion'] } ) | ( ParagraphEmbed ) | ( Omit<ParagraphGeneriek, 'items'> & { items?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphHeader, 'image' | 'knoppen'> & { image: RefType['MediaUnion'], knoppen?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphIcon, 'image'> & { image: RefType['MediaUnion'] } ) | ( Omit<ParagraphTeaser, 'reference'> & { reference: Array<RefType['NodeUnion']> } ) | ( ParagraphText ) | ( Omit<ParagraphVideo, 'video'> & { video?: Maybe<RefType['MediaUnion']> } ) | ( Omit<ParagraphVideobanner, 'videoUrl'> & { videoUrl?: Maybe<RefType['MediaUnion']> } ) | ( User );
  MediaInterface: ( MediaImage ) | ( MediaRemoteVideo ) | ( MediaVideo );
  NodeInterface: ( Omit<NodePage, 'mediaImage' | 'paragraphs'> & { mediaImage?: Maybe<RefType['MediaUnion']>, paragraphs?: Maybe<Array<RefType['ParagraphUnion']>> } );
  ParagraphInterface: ( Omit<ParagraphBanner5050, 'buttons'> & { buttons: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphBannerCard, 'cards'> & { cards: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphBannerFull, 'imagebannerfull'> & { imagebannerfull?: Maybe<RefType['MediaUnion']> } ) | ( Omit<ParagraphBannerIcon, 'icons'> & { icons?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphBannerTile, 'tiles'> & { tiles: Array<RefType['ParagraphUnion']> } ) | ( Omit<ParagraphButton, 'image'> & { image: RefType['MediaUnion'] } ) | ( ParagraphEmbed ) | ( Omit<ParagraphGeneriek, 'items'> & { items?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphHeader, 'image' | 'knoppen'> & { image: RefType['MediaUnion'], knoppen?: Maybe<Array<RefType['ParagraphUnion']>> } ) | ( Omit<ParagraphIcon, 'image'> & { image: RefType['MediaUnion'] } ) | ( Omit<ParagraphTeaser, 'reference'> & { reference: Array<RefType['NodeUnion']> } ) | ( ParagraphText ) | ( Omit<ParagraphVideo, 'video'> & { video?: Maybe<RefType['MediaUnion']> } ) | ( Omit<ParagraphVideobanner, 'videoUrl'> & { videoUrl?: Maybe<RefType['MediaUnion']> } );
  UserInterface: ( User );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Connection: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Connection']>;
  ConnectionPageInfo: ResolverTypeWrapper<ConnectionPageInfo>;
  ConnectionSortKeys: ConnectionSortKeys;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']['output']>;
  DateTime: ResolverTypeWrapper<DateTime>;
  Edge: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Edge']>;
  EdgeNode: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['EdgeNode']>;
  Email: ResolverTypeWrapper<Scalars['Email']['output']>;
  File: ResolverTypeWrapper<File>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Html: ResolverTypeWrapper<Scalars['Html']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  KeyValueInput: KeyValueInput;
  Language: ResolverTypeWrapper<Language>;
  Link: ResolverTypeWrapper<Link>;
  MediaImage: ResolverTypeWrapper<MediaImage>;
  MediaImageConnection: ResolverTypeWrapper<MediaImageConnection>;
  MediaImageEdge: ResolverTypeWrapper<MediaImageEdge>;
  MediaInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MediaInterface']>;
  MediaRemoteVideo: ResolverTypeWrapper<MediaRemoteVideo>;
  MediaRemoteVideoConnection: ResolverTypeWrapper<MediaRemoteVideoConnection>;
  MediaRemoteVideoEdge: ResolverTypeWrapper<MediaRemoteVideoEdge>;
  MediaUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MediaUnion']>;
  MediaVideo: ResolverTypeWrapper<MediaVideo>;
  MediaVideoConnection: ResolverTypeWrapper<MediaVideoConnection>;
  MediaVideoEdge: ResolverTypeWrapper<MediaVideoEdge>;
  Mutation: ResolverTypeWrapper<{}>;
  NodeInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['NodeInterface']>;
  NodePage: ResolverTypeWrapper<Omit<NodePage, 'mediaImage' | 'paragraphs'> & { mediaImage?: Maybe<ResolversTypes['MediaUnion']>, paragraphs?: Maybe<Array<ResolversTypes['ParagraphUnion']>> }>;
  NodePageConnection: ResolverTypeWrapper<NodePageConnection>;
  NodePageEdge: ResolverTypeWrapper<NodePageEdge>;
  NodeUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NodeUnion']>;
  ParagraphBanner5050: ResolverTypeWrapper<Omit<ParagraphBanner5050, 'buttons'> & { buttons: Array<ResolversTypes['ParagraphUnion']> }>;
  ParagraphBanner5050Connection: ResolverTypeWrapper<ParagraphBanner5050Connection>;
  ParagraphBanner5050Edge: ResolverTypeWrapper<ParagraphBanner5050Edge>;
  ParagraphBannerCard: ResolverTypeWrapper<Omit<ParagraphBannerCard, 'cards'> & { cards: Array<ResolversTypes['ParagraphUnion']> }>;
  ParagraphBannerCardConnection: ResolverTypeWrapper<ParagraphBannerCardConnection>;
  ParagraphBannerCardEdge: ResolverTypeWrapper<ParagraphBannerCardEdge>;
  ParagraphBannerFull: ResolverTypeWrapper<Omit<ParagraphBannerFull, 'imagebannerfull'> & { imagebannerfull?: Maybe<ResolversTypes['MediaUnion']> }>;
  ParagraphBannerFullConnection: ResolverTypeWrapper<ParagraphBannerFullConnection>;
  ParagraphBannerFullEdge: ResolverTypeWrapper<ParagraphBannerFullEdge>;
  ParagraphBannerIcon: ResolverTypeWrapper<Omit<ParagraphBannerIcon, 'icons'> & { icons?: Maybe<Array<ResolversTypes['ParagraphUnion']>> }>;
  ParagraphBannerIconConnection: ResolverTypeWrapper<ParagraphBannerIconConnection>;
  ParagraphBannerIconEdge: ResolverTypeWrapper<ParagraphBannerIconEdge>;
  ParagraphBannerTile: ResolverTypeWrapper<Omit<ParagraphBannerTile, 'tiles'> & { tiles: Array<ResolversTypes['ParagraphUnion']> }>;
  ParagraphBannerTileConnection: ResolverTypeWrapper<ParagraphBannerTileConnection>;
  ParagraphBannerTileEdge: ResolverTypeWrapper<ParagraphBannerTileEdge>;
  ParagraphButton: ResolverTypeWrapper<Omit<ParagraphButton, 'image'> & { image: ResolversTypes['MediaUnion'] }>;
  ParagraphButtonConnection: ResolverTypeWrapper<ParagraphButtonConnection>;
  ParagraphButtonEdge: ResolverTypeWrapper<ParagraphButtonEdge>;
  ParagraphEmbed: ResolverTypeWrapper<ParagraphEmbed>;
  ParagraphEmbedConnection: ResolverTypeWrapper<ParagraphEmbedConnection>;
  ParagraphEmbedEdge: ResolverTypeWrapper<ParagraphEmbedEdge>;
  ParagraphGeneriek: ResolverTypeWrapper<Omit<ParagraphGeneriek, 'items'> & { items?: Maybe<Array<ResolversTypes['ParagraphUnion']>> }>;
  ParagraphGeneriekConnection: ResolverTypeWrapper<ParagraphGeneriekConnection>;
  ParagraphGeneriekEdge: ResolverTypeWrapper<ParagraphGeneriekEdge>;
  ParagraphHeader: ResolverTypeWrapper<Omit<ParagraphHeader, 'image' | 'knoppen'> & { image: ResolversTypes['MediaUnion'], knoppen?: Maybe<Array<ResolversTypes['ParagraphUnion']>> }>;
  ParagraphHeaderConnection: ResolverTypeWrapper<ParagraphHeaderConnection>;
  ParagraphHeaderEdge: ResolverTypeWrapper<ParagraphHeaderEdge>;
  ParagraphIcon: ResolverTypeWrapper<Omit<ParagraphIcon, 'image'> & { image: ResolversTypes['MediaUnion'] }>;
  ParagraphIconConnection: ResolverTypeWrapper<ParagraphIconConnection>;
  ParagraphIconEdge: ResolverTypeWrapper<ParagraphIconEdge>;
  ParagraphInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ParagraphInterface']>;
  ParagraphTeaser: ResolverTypeWrapper<Omit<ParagraphTeaser, 'reference'> & { reference: Array<ResolversTypes['NodeUnion']> }>;
  ParagraphTeaserConnection: ResolverTypeWrapper<ParagraphTeaserConnection>;
  ParagraphTeaserEdge: ResolverTypeWrapper<ParagraphTeaserEdge>;
  ParagraphText: ResolverTypeWrapper<ParagraphText>;
  ParagraphTextConnection: ResolverTypeWrapper<ParagraphTextConnection>;
  ParagraphTextEdge: ResolverTypeWrapper<ParagraphTextEdge>;
  ParagraphUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ParagraphUnion']>;
  ParagraphVideo: ResolverTypeWrapper<Omit<ParagraphVideo, 'video'> & { video?: Maybe<ResolversTypes['MediaUnion']> }>;
  ParagraphVideoConnection: ResolverTypeWrapper<ParagraphVideoConnection>;
  ParagraphVideoEdge: ResolverTypeWrapper<ParagraphVideoEdge>;
  ParagraphVideobanner: ResolverTypeWrapper<Omit<ParagraphVideobanner, 'videoUrl'> & { videoUrl?: Maybe<ResolversTypes['MediaUnion']> }>;
  ParagraphVideobannerConnection: ResolverTypeWrapper<ParagraphVideobannerConnection>;
  ParagraphVideobannerEdge: ResolverTypeWrapper<ParagraphVideobannerEdge>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']['output']>;
  Query: ResolverTypeWrapper<{}>;
  SchemaInformation: ResolverTypeWrapper<SchemaInformation>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Text: ResolverTypeWrapper<Text>;
  TextSummary: ResolverTypeWrapper<TextSummary>;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  UnsupportedType: ResolverTypeWrapper<UnsupportedType>;
  UntypedStructuredData: ResolverTypeWrapper<Scalars['UntypedStructuredData']['output']>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['UserInterface']>;
  UserRoles: ResolverTypeWrapper<Scalars['UserRoles']['output']>;
  UserStatus: UserStatus;
  UserUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UserUnion']>;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Connection: ResolversInterfaceTypes<ResolversParentTypes>['Connection'];
  ConnectionPageInfo: ConnectionPageInfo;
  Cursor: Scalars['Cursor']['output'];
  DateTime: DateTime;
  Edge: ResolversInterfaceTypes<ResolversParentTypes>['Edge'];
  EdgeNode: ResolversInterfaceTypes<ResolversParentTypes>['EdgeNode'];
  Email: Scalars['Email']['output'];
  File: File;
  Float: Scalars['Float']['output'];
  Html: Scalars['Html']['output'];
  ID: Scalars['ID']['output'];
  Image: Image;
  Int: Scalars['Int']['output'];
  KeyValueInput: KeyValueInput;
  Language: Language;
  Link: Link;
  MediaImage: MediaImage;
  MediaImageConnection: MediaImageConnection;
  MediaImageEdge: MediaImageEdge;
  MediaInterface: ResolversInterfaceTypes<ResolversParentTypes>['MediaInterface'];
  MediaRemoteVideo: MediaRemoteVideo;
  MediaRemoteVideoConnection: MediaRemoteVideoConnection;
  MediaRemoteVideoEdge: MediaRemoteVideoEdge;
  MediaUnion: ResolversUnionTypes<ResolversParentTypes>['MediaUnion'];
  MediaVideo: MediaVideo;
  MediaVideoConnection: MediaVideoConnection;
  MediaVideoEdge: MediaVideoEdge;
  Mutation: {};
  NodeInterface: ResolversInterfaceTypes<ResolversParentTypes>['NodeInterface'];
  NodePage: Omit<NodePage, 'mediaImage' | 'paragraphs'> & { mediaImage?: Maybe<ResolversParentTypes['MediaUnion']>, paragraphs?: Maybe<Array<ResolversParentTypes['ParagraphUnion']>> };
  NodePageConnection: NodePageConnection;
  NodePageEdge: NodePageEdge;
  NodeUnion: ResolversUnionTypes<ResolversParentTypes>['NodeUnion'];
  ParagraphBanner5050: Omit<ParagraphBanner5050, 'buttons'> & { buttons: Array<ResolversParentTypes['ParagraphUnion']> };
  ParagraphBanner5050Connection: ParagraphBanner5050Connection;
  ParagraphBanner5050Edge: ParagraphBanner5050Edge;
  ParagraphBannerCard: Omit<ParagraphBannerCard, 'cards'> & { cards: Array<ResolversParentTypes['ParagraphUnion']> };
  ParagraphBannerCardConnection: ParagraphBannerCardConnection;
  ParagraphBannerCardEdge: ParagraphBannerCardEdge;
  ParagraphBannerFull: Omit<ParagraphBannerFull, 'imagebannerfull'> & { imagebannerfull?: Maybe<ResolversParentTypes['MediaUnion']> };
  ParagraphBannerFullConnection: ParagraphBannerFullConnection;
  ParagraphBannerFullEdge: ParagraphBannerFullEdge;
  ParagraphBannerIcon: Omit<ParagraphBannerIcon, 'icons'> & { icons?: Maybe<Array<ResolversParentTypes['ParagraphUnion']>> };
  ParagraphBannerIconConnection: ParagraphBannerIconConnection;
  ParagraphBannerIconEdge: ParagraphBannerIconEdge;
  ParagraphBannerTile: Omit<ParagraphBannerTile, 'tiles'> & { tiles: Array<ResolversParentTypes['ParagraphUnion']> };
  ParagraphBannerTileConnection: ParagraphBannerTileConnection;
  ParagraphBannerTileEdge: ParagraphBannerTileEdge;
  ParagraphButton: Omit<ParagraphButton, 'image'> & { image: ResolversParentTypes['MediaUnion'] };
  ParagraphButtonConnection: ParagraphButtonConnection;
  ParagraphButtonEdge: ParagraphButtonEdge;
  ParagraphEmbed: ParagraphEmbed;
  ParagraphEmbedConnection: ParagraphEmbedConnection;
  ParagraphEmbedEdge: ParagraphEmbedEdge;
  ParagraphGeneriek: Omit<ParagraphGeneriek, 'items'> & { items?: Maybe<Array<ResolversParentTypes['ParagraphUnion']>> };
  ParagraphGeneriekConnection: ParagraphGeneriekConnection;
  ParagraphGeneriekEdge: ParagraphGeneriekEdge;
  ParagraphHeader: Omit<ParagraphHeader, 'image' | 'knoppen'> & { image: ResolversParentTypes['MediaUnion'], knoppen?: Maybe<Array<ResolversParentTypes['ParagraphUnion']>> };
  ParagraphHeaderConnection: ParagraphHeaderConnection;
  ParagraphHeaderEdge: ParagraphHeaderEdge;
  ParagraphIcon: Omit<ParagraphIcon, 'image'> & { image: ResolversParentTypes['MediaUnion'] };
  ParagraphIconConnection: ParagraphIconConnection;
  ParagraphIconEdge: ParagraphIconEdge;
  ParagraphInterface: ResolversInterfaceTypes<ResolversParentTypes>['ParagraphInterface'];
  ParagraphTeaser: Omit<ParagraphTeaser, 'reference'> & { reference: Array<ResolversParentTypes['NodeUnion']> };
  ParagraphTeaserConnection: ParagraphTeaserConnection;
  ParagraphTeaserEdge: ParagraphTeaserEdge;
  ParagraphText: ParagraphText;
  ParagraphTextConnection: ParagraphTextConnection;
  ParagraphTextEdge: ParagraphTextEdge;
  ParagraphUnion: ResolversUnionTypes<ResolversParentTypes>['ParagraphUnion'];
  ParagraphVideo: Omit<ParagraphVideo, 'video'> & { video?: Maybe<ResolversParentTypes['MediaUnion']> };
  ParagraphVideoConnection: ParagraphVideoConnection;
  ParagraphVideoEdge: ParagraphVideoEdge;
  ParagraphVideobanner: Omit<ParagraphVideobanner, 'videoUrl'> & { videoUrl?: Maybe<ResolversParentTypes['MediaUnion']> };
  ParagraphVideobannerConnection: ParagraphVideobannerConnection;
  ParagraphVideobannerEdge: ParagraphVideobannerEdge;
  PhoneNumber: Scalars['PhoneNumber']['output'];
  Query: {};
  SchemaInformation: SchemaInformation;
  String: Scalars['String']['output'];
  Text: Text;
  TextSummary: TextSummary;
  Time: Scalars['Time']['output'];
  TimeZone: Scalars['TimeZone']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  UnsupportedType: UnsupportedType;
  UntypedStructuredData: Scalars['UntypedStructuredData']['output'];
  User: User;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  UserInterface: ResolversInterfaceTypes<ResolversParentTypes>['UserInterface'];
  UserRoles: Scalars['UserRoles']['output'];
  UserUnion: ResolversUnionTypes<ResolversParentTypes>['UserUnion'];
  UtcOffset: Scalars['UtcOffset']['output'];
};

export type ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = {
  __resolveType: TypeResolveFn<'MediaImageConnection' | 'MediaRemoteVideoConnection' | 'MediaVideoConnection' | 'NodePageConnection' | 'ParagraphBanner5050Connection' | 'ParagraphBannerCardConnection' | 'ParagraphBannerFullConnection' | 'ParagraphBannerIconConnection' | 'ParagraphBannerTileConnection' | 'ParagraphButtonConnection' | 'ParagraphEmbedConnection' | 'ParagraphGeneriekConnection' | 'ParagraphHeaderConnection' | 'ParagraphIconConnection' | 'ParagraphTeaserConnection' | 'ParagraphTextConnection' | 'ParagraphVideoConnection' | 'ParagraphVideobannerConnection' | 'UserConnection', ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['Edge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['EdgeNode']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
};

export type ConnectionPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConnectionPageInfo'] = ResolversParentTypes['ConnectionPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export type DateTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateTime'] = ResolversParentTypes['DateTime']> = {
  offset?: Resolver<ResolversTypes['UtcOffset'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['TimeZone'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = {
  __resolveType: TypeResolveFn<'MediaImageEdge' | 'MediaRemoteVideoEdge' | 'MediaVideoEdge' | 'NodePageEdge' | 'ParagraphBanner5050Edge' | 'ParagraphBannerCardEdge' | 'ParagraphBannerFullEdge' | 'ParagraphBannerIconEdge' | 'ParagraphBannerTileEdge' | 'ParagraphButtonEdge' | 'ParagraphEmbedEdge' | 'ParagraphGeneriekEdge' | 'ParagraphHeaderEdge' | 'ParagraphIconEdge' | 'ParagraphTeaserEdge' | 'ParagraphTextEdge' | 'ParagraphVideoEdge' | 'ParagraphVideobannerEdge' | 'UserEdge', ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EdgeNode'], ParentType, ContextType>;
};

export type EdgeNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EdgeNode'] = ResolversParentTypes['EdgeNode']> = {
  __resolveType: TypeResolveFn<'MediaImage' | 'MediaRemoteVideo' | 'MediaVideo' | 'NodePage' | 'ParagraphBanner5050' | 'ParagraphBannerCard' | 'ParagraphBannerFull' | 'ParagraphBannerIcon' | 'ParagraphBannerTile' | 'ParagraphButton' | 'ParagraphEmbed' | 'ParagraphGeneriek' | 'ParagraphHeader' | 'ParagraphIcon' | 'ParagraphTeaser' | 'ParagraphText' | 'ParagraphVideo' | 'ParagraphVideobanner' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HtmlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Html'], any> {
  name: 'Html';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
  internal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaImage'] = ResolversParentTypes['MediaImage']> = {
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  mediaImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaImageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaImageConnection'] = ResolversParentTypes['MediaImageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MediaImageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MediaImage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaImageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaImageEdge'] = ResolversParentTypes['MediaImageEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MediaImage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaInterface'] = ResolversParentTypes['MediaInterface']> = {
  __resolveType: TypeResolveFn<'MediaImage' | 'MediaRemoteVideo' | 'MediaVideo', ParentType, ContextType>;
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type MediaRemoteVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRemoteVideo'] = ResolversParentTypes['MediaRemoteVideo']> = {
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  mediaOembedVideo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaRemoteVideoConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRemoteVideoConnection'] = ResolversParentTypes['MediaRemoteVideoConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MediaRemoteVideoEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MediaRemoteVideo']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaRemoteVideoEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRemoteVideoEdge'] = ResolversParentTypes['MediaRemoteVideoEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MediaRemoteVideo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaUnion'] = ResolversParentTypes['MediaUnion']> = {
  __resolveType: TypeResolveFn<'MediaImage' | 'MediaRemoteVideo' | 'MediaVideo', ParentType, ContextType>;
};

export type MediaVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaVideo'] = ResolversParentTypes['MediaVideo']> = {
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  mediaVideoFile?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaVideoConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaVideoConnection'] = ResolversParentTypes['MediaVideoConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MediaVideoEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MediaVideo']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaVideoEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaVideoEdge'] = ResolversParentTypes['MediaVideoEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MediaVideo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type NodeInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeInterface'] = ResolversParentTypes['NodeInterface']> = {
  __resolveType: TypeResolveFn<'NodePage', ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  promote?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sticky?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NodePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodePage'] = ResolversParentTypes['NodePage']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['TextSummary']>, ParentType, ContextType>;
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  mediaImage?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  paragraphs?: Resolver<Maybe<Array<ResolversTypes['ParagraphUnion']>>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  promote?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sticky?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  verbergStandaardHeader?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodePageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodePageConnection'] = ResolversParentTypes['NodePageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['NodePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['NodePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodePageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodePageEdge'] = ResolversParentTypes['NodePageEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['NodePage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeUnion'] = ResolversParentTypes['NodeUnion']> = {
  __resolveType: TypeResolveFn<'NodePage', ParentType, ContextType>;
};

export type ParagraphBanner5050Resolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBanner5050'] = ResolversParentTypes['ParagraphBanner5050']> = {
  buttons?: Resolver<Array<ResolversTypes['ParagraphUnion']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBanner5050ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBanner5050Connection'] = ResolversParentTypes['ParagraphBanner5050Connection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphBanner5050Edge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphBanner5050']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBanner5050EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBanner5050Edge'] = ResolversParentTypes['ParagraphBanner5050Edge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphBanner5050'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerCard'] = ResolversParentTypes['ParagraphBannerCard']> = {
  cards?: Resolver<Array<ResolversTypes['ParagraphUnion']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerCardConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerCardConnection'] = ResolversParentTypes['ParagraphBannerCardConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphBannerCardEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphBannerCard']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerCardEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerCardEdge'] = ResolversParentTypes['ParagraphBannerCardEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphBannerCard'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerFullResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerFull'] = ResolversParentTypes['ParagraphBannerFull']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imagebannerfull?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType>;
  linkKnopTekst?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uitlijning?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerFullConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerFullConnection'] = ResolversParentTypes['ParagraphBannerFullConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphBannerFullEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphBannerFull']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerFullEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerFullEdge'] = ResolversParentTypes['ParagraphBannerFullEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphBannerFull'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerIconResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerIcon'] = ResolversParentTypes['ParagraphBannerIcon']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  icons?: Resolver<Maybe<Array<ResolversTypes['ParagraphUnion']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerIconConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerIconConnection'] = ResolversParentTypes['ParagraphBannerIconConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphBannerIconEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphBannerIcon']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerIconEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerIconEdge'] = ResolversParentTypes['ParagraphBannerIconEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphBannerIcon'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerTileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerTile'] = ResolversParentTypes['ParagraphBannerTile']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  tiles?: Resolver<Array<ResolversTypes['ParagraphUnion']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerTileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerTileConnection'] = ResolversParentTypes['ParagraphBannerTileConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphBannerTileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphBannerTile']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphBannerTileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphBannerTileEdge'] = ResolversParentTypes['ParagraphBannerTileEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphBannerTile'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphButtonResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphButton'] = ResolversParentTypes['ParagraphButton']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['MediaUnion'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphButtonConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphButtonConnection'] = ResolversParentTypes['ParagraphButtonConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphButtonEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphButton']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphButtonEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphButtonEdge'] = ResolversParentTypes['ParagraphButtonEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphButton'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphEmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphEmbed'] = ResolversParentTypes['ParagraphEmbed']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  embed?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphEmbedConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphEmbedConnection'] = ResolversParentTypes['ParagraphEmbedConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphEmbedEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphEmbed']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphEmbedEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphEmbedEdge'] = ResolversParentTypes['ParagraphEmbedEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphEmbed'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphGeneriekResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphGeneriek'] = ResolversParentTypes['ParagraphGeneriek']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['ParagraphUnion']>>, ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphGeneriekConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphGeneriekConnection'] = ResolversParentTypes['ParagraphGeneriekConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphGeneriekEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphGeneriek']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphGeneriekEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphGeneriekEdge'] = ResolversParentTypes['ParagraphGeneriekEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphGeneriek'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphHeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphHeader'] = ResolversParentTypes['ParagraphHeader']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['MediaUnion'], ParentType, ContextType>;
  knoppen?: Resolver<Maybe<Array<ResolversTypes['ParagraphUnion']>>, ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphHeaderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphHeaderConnection'] = ResolversParentTypes['ParagraphHeaderConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphHeaderEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphHeader']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphHeaderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphHeaderEdge'] = ResolversParentTypes['ParagraphHeaderEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphHeader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphIconResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphIcon'] = ResolversParentTypes['ParagraphIcon']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['MediaUnion'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphIconConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphIconConnection'] = ResolversParentTypes['ParagraphIconConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphIconEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphIcon']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphIconEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphIconEdge'] = ResolversParentTypes['ParagraphIconEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphIcon'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphInterface'] = ResolversParentTypes['ParagraphInterface']> = {
  __resolveType: TypeResolveFn<'ParagraphBanner5050' | 'ParagraphBannerCard' | 'ParagraphBannerFull' | 'ParagraphBannerIcon' | 'ParagraphBannerTile' | 'ParagraphButton' | 'ParagraphEmbed' | 'ParagraphGeneriek' | 'ParagraphHeader' | 'ParagraphIcon' | 'ParagraphTeaser' | 'ParagraphText' | 'ParagraphVideo' | 'ParagraphVideobanner', ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ParagraphTeaserResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphTeaser'] = ResolversParentTypes['ParagraphTeaser']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  reference?: Resolver<Array<ResolversTypes['NodeUnion']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphTeaserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphTeaserConnection'] = ResolversParentTypes['ParagraphTeaserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphTeaserEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphTeaser']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphTeaserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphTeaserEdge'] = ResolversParentTypes['ParagraphTeaserEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphTeaser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphText'] = ResolversParentTypes['ParagraphText']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['TextSummary']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphTextConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphTextConnection'] = ResolversParentTypes['ParagraphTextConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphTextEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphText']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphTextEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphTextEdge'] = ResolversParentTypes['ParagraphTextEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphText'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphUnion'] = ResolversParentTypes['ParagraphUnion']> = {
  __resolveType: TypeResolveFn<'ParagraphBanner5050' | 'ParagraphBannerCard' | 'ParagraphBannerFull' | 'ParagraphBannerIcon' | 'ParagraphBannerTile' | 'ParagraphButton' | 'ParagraphEmbed' | 'ParagraphGeneriek' | 'ParagraphHeader' | 'ParagraphIcon' | 'ParagraphTeaser' | 'ParagraphText' | 'ParagraphVideo' | 'ParagraphVideobanner', ParentType, ContextType>;
};

export type ParagraphVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphVideo'] = ResolversParentTypes['ParagraphVideo']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['TextSummary']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphVideoConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphVideoConnection'] = ResolversParentTypes['ParagraphVideoConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphVideoEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphVideo']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphVideoEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphVideoEdge'] = ResolversParentTypes['ParagraphVideoEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphVideo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphVideobannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphVideobanner'] = ResolversParentTypes['ParagraphVideobanner']> = {
  beschrijving?: Resolver<ResolversTypes['Text'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langcode?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  titel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  videoUrl?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphVideobannerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphVideobannerConnection'] = ResolversParentTypes['ParagraphVideobannerConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParagraphVideobannerEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ParagraphVideobanner']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParagraphVideobannerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParagraphVideobannerEdge'] = ResolversParentTypes['ParagraphVideobannerEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParagraphVideobanner'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  info?: Resolver<ResolversTypes['SchemaInformation'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType, RequireFields<QueryMediaArgs, 'id'>>;
  mediaImages?: Resolver<ResolversTypes['MediaImageConnection'], ParentType, ContextType, RequireFields<QueryMediaImagesArgs, 'reverse'>>;
  mediaRemoteVideos?: Resolver<ResolversTypes['MediaRemoteVideoConnection'], ParentType, ContextType, RequireFields<QueryMediaRemoteVideosArgs, 'reverse'>>;
  mediaVideos?: Resolver<ResolversTypes['MediaVideoConnection'], ParentType, ContextType, RequireFields<QueryMediaVideosArgs, 'reverse'>>;
  node?: Resolver<Maybe<ResolversTypes['NodeUnion']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodePages?: Resolver<ResolversTypes['NodePageConnection'], ParentType, ContextType, RequireFields<QueryNodePagesArgs, 'reverse'>>;
  paragraph?: Resolver<Maybe<ResolversTypes['ParagraphUnion']>, ParentType, ContextType, RequireFields<QueryParagraphArgs, 'id'>>;
  paragraphBanner5050s?: Resolver<ResolversTypes['ParagraphBanner5050Connection'], ParentType, ContextType, RequireFields<QueryParagraphBanner5050sArgs, 'reverse'>>;
  paragraphBannerCards?: Resolver<ResolversTypes['ParagraphBannerCardConnection'], ParentType, ContextType, RequireFields<QueryParagraphBannerCardsArgs, 'reverse'>>;
  paragraphBannerFulls?: Resolver<ResolversTypes['ParagraphBannerFullConnection'], ParentType, ContextType, RequireFields<QueryParagraphBannerFullsArgs, 'reverse'>>;
  paragraphBannerIcons?: Resolver<ResolversTypes['ParagraphBannerIconConnection'], ParentType, ContextType, RequireFields<QueryParagraphBannerIconsArgs, 'reverse'>>;
  paragraphBannerTiles?: Resolver<ResolversTypes['ParagraphBannerTileConnection'], ParentType, ContextType, RequireFields<QueryParagraphBannerTilesArgs, 'reverse'>>;
  paragraphButtons?: Resolver<ResolversTypes['ParagraphButtonConnection'], ParentType, ContextType, RequireFields<QueryParagraphButtonsArgs, 'reverse'>>;
  paragraphEmbeds?: Resolver<ResolversTypes['ParagraphEmbedConnection'], ParentType, ContextType, RequireFields<QueryParagraphEmbedsArgs, 'reverse'>>;
  paragraphGenerieks?: Resolver<ResolversTypes['ParagraphGeneriekConnection'], ParentType, ContextType, RequireFields<QueryParagraphGenerieksArgs, 'reverse'>>;
  paragraphHeaders?: Resolver<ResolversTypes['ParagraphHeaderConnection'], ParentType, ContextType, RequireFields<QueryParagraphHeadersArgs, 'reverse'>>;
  paragraphIcons?: Resolver<ResolversTypes['ParagraphIconConnection'], ParentType, ContextType, RequireFields<QueryParagraphIconsArgs, 'reverse'>>;
  paragraphTeasers?: Resolver<ResolversTypes['ParagraphTeaserConnection'], ParentType, ContextType, RequireFields<QueryParagraphTeasersArgs, 'reverse'>>;
  paragraphTexts?: Resolver<ResolversTypes['ParagraphTextConnection'], ParentType, ContextType, RequireFields<QueryParagraphTextsArgs, 'reverse'>>;
  paragraphVideobanners?: Resolver<ResolversTypes['ParagraphVideobannerConnection'], ParentType, ContextType, RequireFields<QueryParagraphVideobannersArgs, 'reverse'>>;
  paragraphVideos?: Resolver<ResolversTypes['ParagraphVideoConnection'], ParentType, ContextType, RequireFields<QueryParagraphVideosArgs, 'reverse'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'reverse'>>;
  viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SchemaInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInformation'] = ResolversParentTypes['SchemaInformation']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Text'] = ResolversParentTypes['Text']> = {
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processed?: Resolver<Maybe<ResolversTypes['Html']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextSummary'] = ResolversParentTypes['TextSummary']> = {
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processed?: Resolver<Maybe<ResolversTypes['Html']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['Html']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type UnsupportedTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnsupportedType'] = ResolversParentTypes['UnsupportedType']> = {
  unsupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UntypedStructuredDataScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UntypedStructuredData'], any> {
  name: 'UntypedStructuredData';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mail?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<ResolversTypes['UserRoles']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>;
  userPicture?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ConnectionPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInterface'] = ResolversParentTypes['UserInterface']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
  changed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mail?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<ResolversTypes['UserRoles']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export interface UserRolesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UserRoles'], any> {
  name: 'UserRoles';
}

export type UserUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserUnion'] = ResolversParentTypes['UserUnion']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export type Resolvers<ContextType = any> = {
  Connection?: ConnectionResolvers<ContextType>;
  ConnectionPageInfo?: ConnectionPageInfoResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  DateTime?: DateTimeResolvers<ContextType>;
  Edge?: EdgeResolvers<ContextType>;
  EdgeNode?: EdgeNodeResolvers<ContextType>;
  Email?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Html?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  MediaImage?: MediaImageResolvers<ContextType>;
  MediaImageConnection?: MediaImageConnectionResolvers<ContextType>;
  MediaImageEdge?: MediaImageEdgeResolvers<ContextType>;
  MediaInterface?: MediaInterfaceResolvers<ContextType>;
  MediaRemoteVideo?: MediaRemoteVideoResolvers<ContextType>;
  MediaRemoteVideoConnection?: MediaRemoteVideoConnectionResolvers<ContextType>;
  MediaRemoteVideoEdge?: MediaRemoteVideoEdgeResolvers<ContextType>;
  MediaUnion?: MediaUnionResolvers<ContextType>;
  MediaVideo?: MediaVideoResolvers<ContextType>;
  MediaVideoConnection?: MediaVideoConnectionResolvers<ContextType>;
  MediaVideoEdge?: MediaVideoEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NodeInterface?: NodeInterfaceResolvers<ContextType>;
  NodePage?: NodePageResolvers<ContextType>;
  NodePageConnection?: NodePageConnectionResolvers<ContextType>;
  NodePageEdge?: NodePageEdgeResolvers<ContextType>;
  NodeUnion?: NodeUnionResolvers<ContextType>;
  ParagraphBanner5050?: ParagraphBanner5050Resolvers<ContextType>;
  ParagraphBanner5050Connection?: ParagraphBanner5050ConnectionResolvers<ContextType>;
  ParagraphBanner5050Edge?: ParagraphBanner5050EdgeResolvers<ContextType>;
  ParagraphBannerCard?: ParagraphBannerCardResolvers<ContextType>;
  ParagraphBannerCardConnection?: ParagraphBannerCardConnectionResolvers<ContextType>;
  ParagraphBannerCardEdge?: ParagraphBannerCardEdgeResolvers<ContextType>;
  ParagraphBannerFull?: ParagraphBannerFullResolvers<ContextType>;
  ParagraphBannerFullConnection?: ParagraphBannerFullConnectionResolvers<ContextType>;
  ParagraphBannerFullEdge?: ParagraphBannerFullEdgeResolvers<ContextType>;
  ParagraphBannerIcon?: ParagraphBannerIconResolvers<ContextType>;
  ParagraphBannerIconConnection?: ParagraphBannerIconConnectionResolvers<ContextType>;
  ParagraphBannerIconEdge?: ParagraphBannerIconEdgeResolvers<ContextType>;
  ParagraphBannerTile?: ParagraphBannerTileResolvers<ContextType>;
  ParagraphBannerTileConnection?: ParagraphBannerTileConnectionResolvers<ContextType>;
  ParagraphBannerTileEdge?: ParagraphBannerTileEdgeResolvers<ContextType>;
  ParagraphButton?: ParagraphButtonResolvers<ContextType>;
  ParagraphButtonConnection?: ParagraphButtonConnectionResolvers<ContextType>;
  ParagraphButtonEdge?: ParagraphButtonEdgeResolvers<ContextType>;
  ParagraphEmbed?: ParagraphEmbedResolvers<ContextType>;
  ParagraphEmbedConnection?: ParagraphEmbedConnectionResolvers<ContextType>;
  ParagraphEmbedEdge?: ParagraphEmbedEdgeResolvers<ContextType>;
  ParagraphGeneriek?: ParagraphGeneriekResolvers<ContextType>;
  ParagraphGeneriekConnection?: ParagraphGeneriekConnectionResolvers<ContextType>;
  ParagraphGeneriekEdge?: ParagraphGeneriekEdgeResolvers<ContextType>;
  ParagraphHeader?: ParagraphHeaderResolvers<ContextType>;
  ParagraphHeaderConnection?: ParagraphHeaderConnectionResolvers<ContextType>;
  ParagraphHeaderEdge?: ParagraphHeaderEdgeResolvers<ContextType>;
  ParagraphIcon?: ParagraphIconResolvers<ContextType>;
  ParagraphIconConnection?: ParagraphIconConnectionResolvers<ContextType>;
  ParagraphIconEdge?: ParagraphIconEdgeResolvers<ContextType>;
  ParagraphInterface?: ParagraphInterfaceResolvers<ContextType>;
  ParagraphTeaser?: ParagraphTeaserResolvers<ContextType>;
  ParagraphTeaserConnection?: ParagraphTeaserConnectionResolvers<ContextType>;
  ParagraphTeaserEdge?: ParagraphTeaserEdgeResolvers<ContextType>;
  ParagraphText?: ParagraphTextResolvers<ContextType>;
  ParagraphTextConnection?: ParagraphTextConnectionResolvers<ContextType>;
  ParagraphTextEdge?: ParagraphTextEdgeResolvers<ContextType>;
  ParagraphUnion?: ParagraphUnionResolvers<ContextType>;
  ParagraphVideo?: ParagraphVideoResolvers<ContextType>;
  ParagraphVideoConnection?: ParagraphVideoConnectionResolvers<ContextType>;
  ParagraphVideoEdge?: ParagraphVideoEdgeResolvers<ContextType>;
  ParagraphVideobanner?: ParagraphVideobannerResolvers<ContextType>;
  ParagraphVideobannerConnection?: ParagraphVideobannerConnectionResolvers<ContextType>;
  ParagraphVideobannerEdge?: ParagraphVideobannerEdgeResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  SchemaInformation?: SchemaInformationResolvers<ContextType>;
  Text?: TextResolvers<ContextType>;
  TextSummary?: TextSummaryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  UnsupportedType?: UnsupportedTypeResolvers<ContextType>;
  UntypedStructuredData?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserInterface?: UserInterfaceResolvers<ContextType>;
  UserRoles?: GraphQLScalarType;
  UserUnion?: UserUnionResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
};

