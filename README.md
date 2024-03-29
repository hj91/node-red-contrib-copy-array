# Node-RED InfluxDB to Dashboard Table

A Node-RED node designed to transform data from an InfluxDB output node into a format suitable for displaying on a Node-RED dashboard table.

## Overview

The InfluxDB to Dashboard Table node is specifically crafted to facilitate the seamless integration of data retrieved from an InfluxDB database into a Node-RED dashboard table. It transforms the raw data obtained from InfluxDB queries into a structured format that can be readily displayed and visualized on the Node-RED dashboard, offering a streamlined solution for visualizing time-series data.

## Features

- **InfluxDB Integration:** Works seamlessly with the InfluxDB output node to retrieve data.
- **Data Transformation:** Converts raw InfluxDB query results into a format compatible with Node-RED dashboard tables.
- **Dashboard Visualization:** Enables easy display and visualization of InfluxDB data on Node-RED dashboards.

## Installation

1. Ensure that you have InfluxDB installed and configured in your environment.
2. Install the InfluxDB to Dashboard Table node by running `npm install node-red-contrib-copy-array` in your Node-RED user directory.

## Usage

1. Drag and drop the InfluxDB to Dashboard Table node from the Node-RED palette onto your flow canvas.
2. Configure the node by specifying the required settings, such as the InfluxDB query and data transformation options.
3. Connect the node to an InfluxDB output node to retrieve data.
4. Connect the output of the InfluxDB to copy-array node to a Node-RED dashboard table node.
5. Deploy your flow to activate the transformation process and display the InfluxDB data on your Node-RED dashboard table.

## Configuration

No specific configuration is required, just pass the msg.payload from influxdb-out node 

## Inputs and Outputs

- **Input:** Accepts messages containing data retrieved from an InfluxDB database.
- **Output:** Emits messages containing transformed data suitable for display on a Node-RED dashboard table.

## Help and Support

For assistance or further information:
- Refer to the [Node-RED documentation](https://nodered.org/docs/).
- Visit the [GitHub repository](https://github.com/hj91/node-red-contrib-copy-array) for this project.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

