import yaml from 'js-yaml'

export function stringify(str, opts) {
    return yaml.safeDump(str, opts)
}

export function parse(str, opts) {
    return yaml.safeLoad(str, opts)
}
