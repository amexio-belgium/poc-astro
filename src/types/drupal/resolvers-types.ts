export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  /** Image */
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
  /** Knop Tekst */
  buttonText?: Maybe<Scalars['String']['output']>;
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** Beschrijving */
  description?: Maybe<Text>;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Afbeelding */
  image?: Maybe<MediaUnion>;
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
export type ParagraphIframe = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphIframe';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** Url */
  url: Link;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphIframe. */
export type ParagraphIframeConnection = Connection & {
  __typename?: 'ParagraphIframeConnection';
  edges: Array<ParagraphIframeEdge>;
  nodes: Array<ParagraphIframe>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphIframe. */
export type ParagraphIframeEdge = Edge & {
  __typename?: 'ParagraphIframeEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphIframe;
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
export type ParagraphJob = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphJob';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphJob. */
export type ParagraphJobConnection = Connection & {
  __typename?: 'ParagraphJobConnection';
  edges: Array<ParagraphJobEdge>;
  nodes: Array<ParagraphJob>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphJob. */
export type ParagraphJobEdge = Edge & {
  __typename?: 'ParagraphJobEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphJob;
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
export type ParagraphUnion = ParagraphBanner5050 | ParagraphBannerCard | ParagraphBannerFull | ParagraphBannerIcon | ParagraphBannerTile | ParagraphButton | ParagraphEmbed | ParagraphGeneriek | ParagraphHeader | ParagraphIcon | ParagraphIframe | ParagraphJob | ParagraphTeaser | ParagraphText | ParagraphVideo | ParagraphVideobanner | ParagraphWebform;

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

/** Entity type paragraph. */
export type ParagraphWebform = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphWebform';
  /** Tijdstip waarop de paragraaf is aangemaakt. */
  created: DateTime;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** Entiteittaalcode van de paragraaf. */
  langcode: Language;
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
};

/** A paginated set of results for ParagraphWebform. */
export type ParagraphWebformConnection = Connection & {
  __typename?: 'ParagraphWebformConnection';
  edges: Array<ParagraphWebformEdge>;
  nodes: Array<ParagraphWebform>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphWebform. */
export type ParagraphWebformEdge = Edge & {
  __typename?: 'ParagraphWebformEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphWebform;
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
  /** List of all ParagraphIframe on the platform. */
  paragraphIframes: ParagraphIframeConnection;
  /** List of all ParagraphJob on the platform. */
  paragraphJobs: ParagraphJobConnection;
  /** List of all ParagraphTeaser on the platform. */
  paragraphTeasers: ParagraphTeaserConnection;
  /** List of all ParagraphText on the platform. */
  paragraphTexts: ParagraphTextConnection;
  /** List of all ParagraphVideobanner on the platform. */
  paragraphVideobanners: ParagraphVideobannerConnection;
  /** List of all ParagraphVideo on the platform. */
  paragraphVideos: ParagraphVideoConnection;
  /** List of all ParagraphWebform on the platform. */
  paragraphWebforms: ParagraphWebformConnection;
  /** Load a Term entity by id. */
  term?: Maybe<TermUnion>;
  /** List of all TermTag on the platform. */
  termTags: TermTagConnection;
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
export type QueryParagraphIframesArgs = {
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
export type QueryParagraphJobsArgs = {
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
export type QueryParagraphWebformsArgs = {
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
export type QueryTermArgs = {
  id: Scalars['ID']['input'];
  langcode?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryTermTagsArgs = {
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

/** Entity type taxonomy_term. */
export type TermInterface = {
  /** Het tijdstip waarop de term het laatst is aangepast. */
  changed: DateTime;
  /** Beschrijving */
  description: Text;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** De taalcode van de term. */
  langcode: Language;
  /** Naam */
  name: Scalars['String']['output'];
  /** De bovenliggende termen van deze term. */
  parent?: Maybe<TermUnion>;
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
  /** Het gewicht van deze term in relatie tot andere termen. */
  weight: Scalars['Int']['output'];
};

/** Gebruik tags om artikelen over vergelijkbare onderwerpen in categorieën te groeperen. */
export type TermTag = EdgeNode & TermInterface & {
  __typename?: 'TermTag';
  /** Het tijdstip waarop de term het laatst is aangepast. */
  changed: DateTime;
  /** Beschrijving */
  description: Text;
  /** The entity ID. */
  id: Scalars['ID']['output'];
  /** De taalcode van de term. */
  langcode: Language;
  /** Naam */
  name: Scalars['String']['output'];
  /** De bovenliggende termen van deze term. */
  parent?: Maybe<TermUnion>;
  /** URL-alias */
  path: Scalars['String']['output'];
  /** Gepubliceerd */
  status: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  uuid: Scalars['ID']['output'];
  /** Het gewicht van deze term in relatie tot andere termen. */
  weight: Scalars['Int']['output'];
};

/** A paginated set of results for TermTag. */
export type TermTagConnection = Connection & {
  __typename?: 'TermTagConnection';
  edges: Array<TermTagEdge>;
  nodes: Array<TermTag>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for TermTag. */
export type TermTagEdge = Edge & {
  __typename?: 'TermTagEdge';
  cursor: Scalars['Cursor']['output'];
  node: TermTag;
};

/** Entity type taxonomy_term. */
export type TermUnion = TermTag;

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
  /** Your virtual face or picture. */
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
