# Ontologies

A collection of standard and well known ontologies serialised to [Turtle](https://en.wikipedia.org/wiki/Turtle_(syntax)).

<blockquote cite="https://en.wikipedia.org/wiki/Ontology_(information_science)">
  <p>In computer science and information science, an ontology encompasses a representation, formal naming and definition of the categories, properties and relations between the concepts, data and entities that substantiate one, many or all domains of discourse.</p>
    <p>—<a href="https://en.wikipedia.org/wiki/Ontology_(information_science)">Wikipedia: Ontology (information science)</a></p>
</blockquote>

## Core W3C ontologies

RDF, RDFS, OWL & XSD constitute the reserved vocabulary of the OWL 2 Web Ontology Language. Those 4 ontologies constitute therefore the backbone of the Semantic Web.

<blockquote cite="https://www.w3.org/TR/rdf-concepts/">
    <h3>Anyone Can Make Statements About Any Resource</h3>
    <p>To facilitate operation at Internet scale, RDF is an open-world framework that allows anyone to make statements about any resource.</p>
    <p>In general, it is not assumed that complete information about any resource is available. RDF does not prevent anyone from making assertions that are nonsensical or inconsistent with other statements, or the world as people see it. Designers of applications that use RDF should be aware of this and may design their applications to tolerate incomplete or inconsistent sources of information.</p>
    <p>—<a href="https://www.w3.org/TR/rdf-concepts/#section-anyone">Resource Description Framework (RDF): Concepts and Abstract Syntax</a></p>
</blockquote>

### RDF technical recommendations (25 February 2014)

- [RDF 1.1 Primer](https://www.w3.org/TR/rdf11-primer/)
- Core specification
  - [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/)
  - [RDF 1.1 Semantics](https://www.w3.org/TR/rdf11-mt/)
- Serialization
  - [Turtle](https://www.w3.org/TR/turtle/)
  - [Trig](https://www.w3.org/TR/trig/)
  - [N-Triples](https://www.w3.org/TR/n-triples/)
  - [N-Quads](https://www.w3.org/TR/n-quads/)
  - [XML Syntax](https://www.w3.org/TR/rdf-syntax-grammar/)
- Notes
  - [What’s New in RDF 1.1](https://www.w3.org/TR/rdf11-new/)
  - [On Semantics of RDF Datasets](https://www.w3.org/TR/rdf11-datasets/)
  - [Test Cases](https://www.w3.org/TR/rdf11-testcases/)
  - [JSON Alternate Serialization (RDF/JSON)](https://www.w3.org/TR/rdf-json/)

### RDFS technical recommendation (25 February 2014)

- [RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/)

### OWL 2 Web Ontology Language technical recommendations (11 December 2012)

- [Document Overview](https://www.w3.org/TR/owl-overview/)
- [Language Primer](https://www.w3.org/TR/owl-primer/)
- [New Features and Rationale](https://www.w3.org/TR/owl-new-features/)
- [Quick Reference Guide](https://www.w3.org/TR/owl2-quick-reference/)
- Core specification
  - [Structural Specification and Functional-Style Syntax](https://www.w3.org/TR/owl-syntax/)
  - [Mapping to RDF Graphs](https://www.w3.org/TR/owl-mapping-to-rdf/)
  - [Direct Semantics](https://www.w3.org/TR/owl-direct-semantics/)
  - [RDF-Based Semantics](https://www.w3.org/TR/owl-rdf-based-semantics/)
  - [Conformance](https://www.w3.org/TR/owl-conformance/)
- Optional features
  - [Profiles](https://www.w3.org/TR/owl-profiles/)
  - [XML Serialization](https://www.w3.org/TR/owl-xml-serialization/)
  - [Manchester Syntax](https://www.w3.org/TR/owl2-manchester-syntax/) (Working Group Note)
- Extension
  - [Data Range Extension: Linear Equations](https://www.w3.org/TR/owl2-dr-linear/) (Working Group Note)

### XSD Datatypes

- [XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/)
- [OWL Quick Reference: Built-in Datatypes and Facets](https://www.w3.org/TR/owl-quick-reference/#Built-in_Datatypes_and_Facets)

## Other W3C ontologies

SHACL, SKOS, DCAT, CSVW, VCARD.

## Other ontologies

Dublin Core, FOAF, Schema.

## Standard prefixes

There is a list of standard prefixes in [prefix.ttl](prefix.ttl) for easy copy/paste.

The list is maintained in lowercase SPARQL syntax to be usable in both Turtle and SPARQL. This syntax requires an RDF 1.1 Turtle parser which can be considered as of 2020 as widely deployed. Therefore no reason to keep using the syntax including an '@' as per the [Turtle Spec note on IRIs](https://www.w3.org/TR/turtle/#sec-iri).

```turtle
# Core W3C ontologies (OWL 2 reserved vocabulary)
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix owl: <http://www.w3.org/2002/07/owl#>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
# Other ontologies
prefix acl: <http://www.w3.org/ns/auth/acl#>
prefix cc: <http://creativecommons.org/ns#>
prefix cert: <http://www.w3.org/ns/auth/cert#>
prefix csvw: <http://www.w3.org/ns/csvw#>
prefix dc: <http://purl.org/dc/elements/1.1/>
prefix dcam: <http://purl.org/dc/dcam/>
prefix dcat: <http://www.w3.org/ns/dcat#>
prefix dcterms: <http://purl.org/dc/terms/>
prefix dctype: <http://purl.org/dc/dcmitype/>
prefix foaf: <http://xmlns.com/foaf/0.1/>
prefix ldp: <http://www.w3.org/ns/ldp#>
prefix posixstat: <http://www.w3.org/ns/posix/stat#>
prefix schema: <https://schema.org/>
prefix sh: <http://www.w3.org/ns/shacl#>
prefix skos: <http://www.w3.org/2004/02/skos/core#>
prefix skosxl: <http://www.w3.org/2008/05/skos-xl#>
prefix solidterms: <http://www.w3.org/ns/solid/terms#>
prefix swapdoc: <http://www.w3.org/2000/10/swap/pim/doc#>
prefix ui: <http://www.w3.org/ns/ui#>
prefix vann: <http://purl.org/vocab/vann/>
prefix vann: <http://purl.org/vocab/vann/>
prefix vcard: <http://www.w3.org/2006/vcard/ns#>
prefix ws: <http://www.w3.org/ns/pim/space#>
```

The namespace lookup tool [prefix.cc](https://prefix.cc) can help understand current prefix usage. The [Linked Open Vocabularies website](https://lov.linkeddata.es/dataset/lov/) can help understand vocabularies usage.
