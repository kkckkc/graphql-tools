import { buildClientSchema } from 'graphql';
function stripBOM(content) {
    content = content.toString();
    // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
    // because the buffer-to-string conversion in `fs.readFileSync()`
    // translates it to FEFF, the UTF-16 BOM.
    if (content.charCodeAt(0) === 0xfeff) {
        content = content.slice(1);
    }
    return content;
}
function parseBOM(content) {
    return JSON.parse(stripBOM(content));
}
export function parseGraphQLJSON(location, jsonContent, options) {
    var parsedJson = parseBOM(jsonContent);
    if (parsedJson.data) {
        parsedJson = parsedJson.data;
    }
    if (parsedJson.kind === 'Document') {
        return {
            location: location,
            document: parsedJson,
        };
    }
    else if (parsedJson.__schema) {
        var schema = buildClientSchema(parsedJson, options);
        return {
            location: location,
            schema: schema,
        };
    }
    else if (typeof parsedJson === 'string') {
        return {
            location: location,
            rawSDL: parsedJson,
        };
    }
    throw new Error("Not valid JSON content");
}
