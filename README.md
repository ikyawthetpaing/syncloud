# Syncloud Documentation

Welcome to the Syncloud documentation! This guide provides details on how to use the API endpoints.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ikyawthetpaing/syncloud.git
   ```

2. Install dependencies:

   ```bash
   cd syncloud && npm install
   ```

3. Run the API:

   ```bash
   npm start
   ```

4. Explore API endpoints at [http://localhost:3000](http://localhost:3000)

## API Documentation

### List of Countries

- **Endpoint:** `/api/v1/countries`
- **Method:** GET
- Retrieve a list of countries. You can include a comma-separated list of fields to filter the response.

  **Query Parameters:**

  - `fields`: Comma-separated list of fields to include in the response.

**Example Requests:**

```http
GET /api/v1/countries
GET /api/v1/countries?fields=name,iso2,flag,states.name,states.state_code,states.cities.name
```

### Country by ISO2 Code

- **Endpoint:** `/api/v1/countries/:code`
- **Method:** GET
- Retrieve information about a specific country based on its ISO2 code.

  **Path Parameter:**

  - `code`: ISO2 code of the country.

  **Query Parameters:**

  - `fields`: Comma-separated list of fields to include in the response.

**Example Requests:**

```http
GET /api/v1/countries/US
GET /api/v1/countries/US?fields=name,iso2,flag,states.name,states.state_code,states.cities.name
```

## Contributing

We welcome contributions from the community! Please follow our [Contribution Guidelines](CONTRIBUTING.md) if you'd like to contribute to Syncloud.

## Contact

If you have questions or need assistance, [contact us](mailto:ikyawthetpaing@gmail.com).

## License

This project is licensed under the [MIT License](LICENSE).
