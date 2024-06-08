const fileStructure = [
    {
        name: "FILES",
        type: "folder",
        children: [
            {
                name: "public",
                type: "folder",
                children: [
                    {
                        name: "index.html",
                        type: "file",
                        extension: "html"
                    },
                    {
                        name: "vite.svg",
                        type: "file",
                        extension: "svg"
                    }
                ]
            },
            {
                name: "src",
                type: "folder",
                children: [
                    {
                        name: 'assets',
                        type: 'folder',
                        children: [
                            {
                                name: 'react.svg',
                                type: "file",
                                extension: "svg"
                            }
                        ]
                    },
                    {
                        name: 'text',
                        type: 'folder',
                        children: [
                            {
                                name: "App.css",
                                type: "file",
                                extension: "css"
                            },
                            {
                                name: "App.js",
                                type: "file",
                                extension: "js"
                            },
                            {
                                name: "App.tsx",
                                type: "file",
                                extension: "tsx"
                            },
                            {
                                name: "main.tsx",
                                type: "file",
                                extension: "tsx"
                            },
                            {
                                name: "vite.env.d.ts",
                                type: "file",
                                extension: "ts"
                            }
                        ]
                    },
                ]
            },
            {
                name: ".eslintrc.cjs",
                type: "file",
                extension: "js"
            },
            {
                name: "_gitignore",
                type: "file",
                extension: "txt"
            },
            {
                name: "Index.css",
                type: "file",
                extension: "css"
            },
            {
                name: "Index.html",
                type: "file",
                extension: "html"
            },
            {
                name: 'package-lock.json',
                type: 'file',
                extension: 'json'
            },
            {
                name: 'package.json',
                type: 'file',
                extension: 'json'
            },
            {
                name: "README.txt",
                type: "file",
                extension: "txt"
            }
        ]
    }
];

export default fileStructure;
