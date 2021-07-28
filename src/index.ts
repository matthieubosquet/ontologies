import { createReadStream } from 'fs';
import { join as joinPath } from 'path';

// Core W3C ontologies (OWL 2 reserved vocabulary)
export const RDF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/rdf.ttl`));
export const RDFS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/rdfs.ttl`));
export const OWL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/owl.ttl`));
export const XSD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/xsd.ttl`));

// Other ontologies
export const ACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/acl.ttl`));
export const ACTIVITY_STREAMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/activity-streams.ttl`));
export const CERT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/cert.ttl`));
export const CONTENT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/content.ttl`));
export const CREATIVE_COMMONS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/creative-commons.ttl`));
export const CSVW: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/csvw.ttl`));
export const DCAT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dcat.ttl`));
export const DUBLIN_CORE_ABSTRACT_MODEL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin-core-abstract-model.ttl`));
export const DUBLIN_CORE_ELEMENTS_DEPRECATED: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin-core-elements.ttl`));
export const DUBLIN_CORE_TERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin-core-terms.ttl`));
export const DUBLIN_CORE_TYPE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin-core-type.ttl`));
export const EARL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/earl.ttl`));
export const FOAF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/foaf.ttl`));
export const GEN: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/gen.ttl`));
export const HTTP: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/http.ttl`));
export const HTTPH: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/httph.ttl`));
export const I18N: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/i18n.ttl`));
export const IANA_LINK_RELATIONS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/iana-link-relations.ttl`));
export const LDP: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/ldp.ttl`));
export const MEMENTO: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/memento.ttl`));
export const PIM_SPACE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/pim-space.ttl`));
export const POSIX_STAT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/posix-stat.ttl`));
export const SCHEMA: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/schema.ttl`));
export const SHACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/shacl.ttl`));
export const SHACL_SHACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/shacl-shacl.ttl`));
export const SHAPETREE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/shapetree.ttl`));
export const SKOS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/skos.ttl`));
export const SKOS_XL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/skos-xl.ttl`));
export const SOLID_ACP: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/solid-acp.ttl`));
export const SOLID_TERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/solid-terms.ttl`));
export const SPARQL_SERVICE_DESCRIPTION: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/sparql-service-description.ttl`));
export const SWAP_DOC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/swap-doc.ttl`));
export const TIME: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/time.ttl`));
export const UI: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/ui.ttl`));
export const VANN: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/vann.ttl`));
export const VCARD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/vcard.ttl`));
export const VOID: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/void.ttl`));
