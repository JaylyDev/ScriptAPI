This folder contains code snippets for usage of script API features, which they're featured in GitHub pages when deployed.

This feature is experimental and it's subject to change, so please avoid taking any significant dependencies on the structure of the files.

## File structure

- `reserved.json`: A file that lists reserved file names for type definitions of Minecraft Bedrock Script APIs. Files created with reserved filenames will not be added to documentation.
- Examples of class usage are located `{ClassName}/constructor/*` directory.
- Examples of class static properties' usage are located in the `{ClassName}/*` directory.
- Examples of class instance properties' usage are located in `{ClassName}/prototype/*` directory.
- Examples usage of interface and enumeration are located in either the `{InterfaceName}/*` or `{EnumName}/*` directories.
- Properties inherited from classes will not be documented. Please document the inherited properties in inherited class.