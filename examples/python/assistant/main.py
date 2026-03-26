from rapida import (
    ConnectionConfig,
    GetAllAssistantAnalysisRequest,
    GetAllAssistantConversationRequest,
    GetAllAssistantKnowledgeRequest,
    GetAllAssistantRequest,
    GetAllAssistantToolRequest,
    GetAllAssistantWebhookLogRequest,
    GetAllAssistantWebhookRequest,
    GetAssistantAnalysisRequest,
    GetAssistantConversationRequest,
    GetAssistantKnowledgeRequest,
    GetAssistantRequest,
    GetAssistantToolRequest,
    GetAssistantWebhookLogRequest,
    GetAssistantWebhookRequest,
    Paginate,
    get_assistant,
    get_all_assistant,
    get_assistant_conversation,
    get_all_assistant_conversation,
    get_assistant_webhook,
    get_all_assistant_webhook,
    get_assistant_knowledge,
    get_all_assistant_knowledge,
    get_assistant_tool,
    get_all_assistant_tool,
    get_assistant_webhook_log,
    get_all_assistant_webhook_log,
    get_assistant_analysis,
    get_all_assistant_analysis,
)
from pprint import pprint


def fetch_assistant():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant(
        client_cfg=connection_config,
        request=GetAssistantRequest(id="{assistant_id}"),
    )
    pprint(response)


def get_all_assistant_list():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant(
        client_cfg=connection_config,
        request=GetAllAssistantRequest(
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def fetch_assistant_conversation():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant_conversation(
        client_cfg=connection_config,
        request=GetAssistantConversationRequest(
            id="{assistant_converstaion_id}", assistantId="{assistant_id}"
        ),
    )
    pprint(response)


def fetch_all_assistant_conversation():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant_conversation(
        client_cfg=connection_config,
        request=GetAllAssistantConversationRequest(
            assistantId="{assistant_id}",
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def fetch_assistant_webhook():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant_webhook(
        client_cfg=connection_config,
        request=GetAssistantWebhookRequest(
            id="{assistant_webhook_id}", assistantId="{assistant_id}"
        ),
    )
    pprint(response)


def fetch_all_assistant_webhook():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant_webhook(
        client_cfg=connection_config,
        request=GetAllAssistantWebhookRequest(
            assistantId="{assistant_id}",
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def fetch_assistant_knowledge():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant_knowledge(
        client_cfg=connection_config,
        request=GetAssistantKnowledgeRequest(
            id="{assistant_knowledge_id}", assistantId="{assistant_id}"
        ),
    )
    pprint(response)


def fetch_all_assistant_knowledge():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant_knowledge(
        client_cfg=connection_config,
        request=GetAllAssistantKnowledgeRequest(
            assistantId="{assistant_id}",
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def fetch_assistant_tool():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant_tool(
        client_cfg=connection_config,
        request=GetAssistantToolRequest(
            id="{assistant_tool_id}", assistantId="{assistant_id}"
        ),
    )
    pprint(response)


def fetch_all_assistant_tool():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant_tool(
        client_cfg=connection_config,
        request=GetAllAssistantToolRequest(
            assistantId="{assistant_id}",
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def fetch_assistant_webhook_log():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant_webhook_log(
        client_cfg=connection_config,
        request=GetAssistantWebhookLogRequest(
            id="{assistant_webhook_log_id}", projectId="{project_id}"
        ),
    )
    pprint(response)


def fetch_all_assistant_webhook_log():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant_webhook_log(
        client_cfg=connection_config,
        request=GetAllAssistantWebhookLogRequest(
            projectId="{project_id}",
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


def fetch_assistant_analysis():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_assistant_analysis(
        client_cfg=connection_config,
        request=GetAssistantAnalysisRequest(
            id="{assistant_analysis_id}", assistantId="{assistant_id}"
        ),
    )
    pprint(response)


def fetch_all_assistant_analysis():
    connection_config = ConnectionConfig.default_connection_config(
        ConnectionConfig.with_sdk("{rapida-api-key}")
    )
    response = get_all_assistant_analysis(
        client_cfg=connection_config,
        request=GetAllAssistantAnalysisRequest(
            assistantId="{assistant_id}",
            paginate=Paginate(page=0, pageSize=20),
            # criterias=[Criteria(key="KEY", value="VALUE", logic="should")],
        ),
    )
    pprint(response)


if __name__ == "__main__":
    # get_all_endpoint_log_list()
    fetch_all_assistant_webhook()
