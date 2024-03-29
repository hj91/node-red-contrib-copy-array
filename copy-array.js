/**

 copy-array.js - Copyright 2024 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/



module.exports = function (RED) {
    function CopyArrayNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        // Define the function that will be called when the node is triggered
        function copyArray(msg) {
            // Initialize an empty array to store the copied values
            let temp = [];

            // Check if msg.payload is an array
            if (Array.isArray(msg.payload)) {
                // Iterate over each element in msg.payload
                msg.payload.forEach(function(value) {
                    // Push each element to the temp array
                    temp.push(value);
                });

                // Assign the temp array back to msg.payload
                msg.payload = temp;
            } else {
                // If msg.payload is not an array, log a warning
                node.warn("Input is not an array. Cannot perform copy operation.");
            }

            // Return the modified message object
            node.send(msg);
        }

        // Register the copyArray function as an event listener for incoming messages
        node.on('input', copyArray);
    }

    // Register the custom node type with Node-RED
    RED.nodes.registerType("copy-array", CopyArrayNode);
}

