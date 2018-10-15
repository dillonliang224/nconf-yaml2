// Project: https://github.com/tellnes/nconf-yaml
// TypeScript Version 3.0.1

export as namespace nconfyaml;

export function stringify(str:string, opts?: stringifyOptions): any
export function parse(str: string, opts: parseOptions): any

export interface stringifyOptions {
    // indentation width to use (in spaces).
	indent?: number;
	// do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types.
	skipInvalid?: boolean;
	// specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere
	flowLevel?: number;
	// Each tag may have own set of styles.	- "tag" => "style" map.
	styles?: { [x: string]: any; };
	// specifies a schema to use.
	schema?: any;
	// if true, sort keys when dumping YAML. If a function, use the function to sort the keys. (default: false)
	sortKeys?: boolean | ((a: any, b: any) => number);
	// set max line width. (default: 80)
	lineWidth?: number;
	// if true, don't convert duplicate objects into references (default: false)
	noRefs?: boolean;
	// if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1 (default: false)
	noCompatMode?: boolean;
	// if true flow sequences will be condensed, omitting the space between `key: value` or `a, b`. Eg. `'[a,b]'` or `{a:{b:c}}`.
	// Can be useful when using yaml for pretty URL query params as spaces are %-encoded. (default: false)
	condenseFlow?: boolean;
}

export interface parseOptions {
    // string to be used as a file path in error/warning messages.
    filename?: string;
    // function to call on warning messages. Loader will throw on warnings if this function is not provided.
    onWarning?: any;
    schema?: any;
    // compatibility with JSON.parse behaviour. If true, then duplicate keys in a mapping will override values rather than throwing an error.
    json?: boolean;
}

export class YAMLException extends Error {
	constructor(reason?: any, mark?: any);
	toString(compact?: boolean): string;
}
