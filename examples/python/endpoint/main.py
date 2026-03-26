from rapida import (
    ConnectionConfig,
    Criteria,
    EndpointDefinition,
    GetAllEndpointLogRequest,
    GetAllEndpointRequest,
    GetEndpointLogRequest,
    GetEndpointRequest,
    InvokeRequest,
    Paginate,
    get_endpoint,
    get_all_endpoint,
    get_all_endpoint_log,
    invoke,
    get_endpoint_log,
    string_to_any,
)
from pprint import pprint


def fetch_endpoint():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{your-rapida-api-key}")
    )
    response = get_endpoint(
        client_cfg=connection_config,
        request=GetEndpointRequest(id=2223006263292198912),
    )
    pprint(response)


def invoke_endpoint():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{your-rapida-api-key}")
    )

    argument_value = string_to_any("Hello how are you doing")
    metadata_value = string_to_any("metadata_to_track")
    option_value = string_to_any("4567898656789")

    response = invoke(
        client_cfg=connection_config,
        request=InvokeRequest(
            endpoint=EndpointDefinition(endpointId=2223006263292198912),
            args={"can": argument_value},
            metadata={"test": metadata_value},
            options={"opts1": option_value},
        ),
    )
    pprint(response)


def get_all_endpoint_list():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{your-rapida-api-key}")
    )
    response = get_all_endpoint(
        client_cfg=connection_config,
        request=GetAllEndpointRequest(
            paginate=Paginate(page=0, pageSize=20),
            criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def get_endpoint_log_detail():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{your-rapida-api-key}")
    )
    response = get_endpoint_log(
        client_cfg=connection_config,
        request=GetEndpointLogRequest(
            id=2230958607199895552,
            endpointId=2223006263292198912,
        ),
    )
    pprint(response)
    pass


def get_all_endpoint_log_list():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{your-rapida-api-key}")
    )
    response = get_all_endpoint_log(
        client_cfg=connection_config,
        request=GetAllEndpointLogRequest(
            endpointId=2223006263292198912,
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


if __name__ == "__main__":
    # get_all_endpoint_log_list()
    get_endpoint_log_detail()
