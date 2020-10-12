import { createReadStream } from 'fs';
import { join as joinPath } from 'path';

// Core W3C ontologies (OWL 2 reserved vocabulary)
export const RDF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `rdf.ttl`));
export const RDFS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `rdfs.ttl`));
export const OWL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `owl.ttl`));
export const XSD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `xsd.ttl`));

// Other ontologies
export const ACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `acl.ttl`));
export const CERT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `cert.ttl`));
export const CC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `creative_commons.ttl`));
export const CSVW: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `csvw.ttl`));
export const DCAT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dcat.ttl`));
export const DCAM: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dublin_core_abstract_model.ttl`));
export const DC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dublin_core_elements.ttl`));
export const DCTERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dublin_core_terms.ttl`));
export const DCTYPE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dublin_core_type.ttl`));
export const FOAF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `foaf.ttl`));
export const LDP: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `ldp.ttl`));
export const POSIXSTAT: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `posix_stat.ttl`));
export const SCHEMA: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `schema.ttl`));
export const SHACL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `shacl.ttl`));
export const SHAPETREE: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `shapetree.ttl`));
export const SKOS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `skos.ttl`));
export const SKOSXL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `skos-xl.ttl`));
export const SOLIDTERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `solid_terms.ttl`));
export const SWAPDOC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `swap_doc.ttl`));
export const UI: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `ui.ttl`));
export const VANN: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `vann.ttl`));
export const VCARD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `vcard.ttl`));
export const WS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `workspace.ttl`));
