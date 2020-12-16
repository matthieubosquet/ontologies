import { createReadStream } from 'fs';
import { join as joinPath } from 'path';

// Core W3C ontologies (OWL 2 reserved vocabulary)
export const RDF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/rdf.ttl`));
export const RDFS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/rdfs.ttl`));
export const OWL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/owl.ttl`));
export const XSD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/xsd.ttl`));

// Other ontologies
export const ACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/acl.ttl`));
export const CERT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/cert.ttl`));
export const CC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/creative_commons.ttl`));
export const CSVW: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/csvw.ttl`));
export const DCAT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dcat.ttl`));
export const DCAM: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin_core_abstract_model.ttl`));
export const DC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin_core_elements.ttl`));
export const DCTERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin_core_terms.ttl`));
export const DCTYPE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/dublin_core_type.ttl`));
export const FOAF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/foaf.ttl`));
export const LDP: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/ldp.ttl`));
export const POSIXSTAT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/posix_stat.ttl`));
export const SCHEMA: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/schema.ttl`));
export const SHACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/shacl.ttl`));
export const SHAPETREE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/shapetree.ttl`));
export const SKOS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/skos.ttl`));
export const SKOSXL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/skos-xl.ttl`));
export const SOLIDACP: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/solid_acp.ttl`));
export const SOLIDTERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/solid_terms.ttl`));
export const SWAPDOC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/swap_doc.ttl`));
export const UI: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/ui.ttl`));
export const VANN: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/vann.ttl`));
export const VCARD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/vcard.ttl`));
export const WS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `../resources/workspace.ttl`));
