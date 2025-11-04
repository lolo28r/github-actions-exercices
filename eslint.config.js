import { FlatCompat } from "eslint-define-config";

const compat = new FlatCompat({
    baseDirectory: process.cwd(),
});

export default [
    ...compat.extends("eslint:recommended"),
];
