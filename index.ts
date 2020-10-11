import { createReadStream } from 'fs';
import { join as joinPath } from 'path';

// Core W3C ontologies (OWL 2 reserved vocabulary)
export const RDF: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `rdf.ttl`));
export const RDFS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `rdfs.ttl`));
export const OWL: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `owl.ttl`));
export const XSD: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `xsd.ttl`));

// Other ontologies
export const DC: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dublin_core_elements.ttl`));
export const DCTERMS: NodeJS.ReadableStream = createReadStream(joinPath(__dirname, `dublin_core_terms.ttl`));
