const { spawn } = require('child_process');
const readline = require('readline');

// Test the Tavily MCP server
async function testTavilyMCP() {
    console.log('Testing Tavily MCP Server...\n');
    
    // Set environment variable
    process.env.TAVILY_API_KEY = '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';
    
    // Spawn the MCP server
    const server = spawn('npx', ['-y', 'tavily-mcp@0.2.1'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: process.env
    });
    
    let responseData = '';
    
    server.stdout.on('data', (data) => {
        responseData += data.toString();
        console.log('Server response:', data.toString());
    });
    
    server.stderr.on('data', (data) => {
        console.error('Server error:', data.toString());
    });
    
    // Send MCP initialization message
    const initMessage = {
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
            protocolVersion: "2024-11-05",
            capabilities: {
                tools: {}
            },
            clientInfo: {
                name: "test-client",
                version: "1.0.0"
            }
        }
    };
    
    console.log('Sending initialization message...');
    server.stdin.write(JSON.stringify(initMessage) + '\n');
    
    // Wait a bit for initialization
    setTimeout(() => {
        // Send tools/list request
        const toolsListMessage = {
            jsonrpc: "2.0",
            id: 2,
            method: "tools/list"
        };
        
        console.log('Requesting available tools...');
        server.stdin.write(JSON.stringify(toolsListMessage) + '\n');
        
        // Wait and then test a search
        setTimeout(() => {
            const searchMessage = {
                jsonrpc: "2.0",
                id: 3,
                method: "tools/call",
                params: {
                    name: "tavily-search",
                    arguments: {
                        query: "latest AI developments 2024",
                        max_results: 2
                    }
                }
            };
            
            console.log('Testing tavily-search tool...');
            server.stdin.write(JSON.stringify(searchMessage) + '\n');
            
            // Clean up after test
            setTimeout(() => {
                server.kill();
                console.log('\nTest completed!');
            }, 5000);
        }, 2000);
    }, 2000);
    
    server.on('close', (code) => {
        console.log(`\nServer process exited with code ${code}`);
    });
}

testTavilyMCP().catch(console.error);const readline = require('readline');

// Test the Tavily MCP server
async function testTavilyMCP() {
    console.log('Testing Tavily MCP Server...\n');
    
    // Set environment variable
    process.env.TAVILY_API_KEY = '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';
    
    // Spawn the MCP server
    const server = spawn('npx', ['-y', 'tavily-mcp@0.2.1'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: process.env
    });
    
    let responseData = '';
    
    server.stdout.on('data', (data) => {
        responseData += data.toString();
        console.log('Server response:', data.toString());
    });
    
    server.stderr.on('data', (data) => {
        console.error('Server error:', data.toString());
    });
    
    // Send MCP initialization message
    const initMessage = {
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
            protocolVersion: "2024-11-05",
            capabilities: {
                tools: {}
            },
            clientInfo: {
                name: "test-client",
                version: "1.0.0"
            }
        }
    };
    
    console.log('Sending initialization message...');
    server.stdin.write(JSON.stringify(initMessage) + '\n');
    
    // Wait a bit for initialization
    setTimeout(() => {
        // Send tools/list request
        const toolsListMessage = {
            jsonrpc: "2.0",
            id: 2,
            method: "tools/list"
        };
        
        console.log('Requesting available tools...');
        server.stdin.write(JSON.stringify(toolsListMessage) + '\n');
        
        // Wait and then test a search
        setTimeout(() => {
            const searchMessage = {
                jsonrpc: "2.0",
                id: 3,
                method: "tools/call",
                params: {
                    name: "tavily-search",
                    arguments: {
                        query: "latest AI developments 2024",
                        max_results: 2
                    }
                }
            };
            
            console.log('Testing tavily-search tool...');
            server.stdin.write(JSON.stringify(searchMessage) + '\n');
            
            // Clean up after test
            setTimeout(() => {
                server.kill();
                console.log('\nTest completed!');
            }, 5000);
        }, 2000);
    }, 2000);
    
    server.on('close', (code) => {
        console.log(`\nServer process exited with code ${code}`);
    });
}

testTavilyMCP().catch(console.error);
