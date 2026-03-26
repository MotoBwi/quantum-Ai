# VoiceAgent Library

## Overview

The `VoiceAgent` library provides a set of components, hooks, and utilities for integrating AI-powered voice assistants into applications. It supports real-time messaging, audio device management, and connection handling for seamless interaction.

## Installation

To install the package, run:

```sh
npm install rapida-react@latest
```

or using Yarn:

```sh
yarn add rapida-react@latest
```

## Usage

Import the necessary components and hooks from `rapida-react@latest`:

```tsx
import {
  Channel,
  ConnectionState,
  MediaDeviceFailure,
  ConnectionConfig,
  AgentConfig,
} from "rapida-react";

import {
  BrandIcon,
  UserIcon,
  MessagingAction,
  ConversationMessages,
  VoiceAgent,
  VoiceAgentContext,
  useConnectAgent,
  useDisconnectAgent,
  useInputModeToggleAgent,
  useMicInputToggleAgent,
  useSpeakerOuputToggleAgent,
  useMultiband3DSpeakerTrackVolume,
  useMultibandMicrophoneTrackVolume,
  useSelectInputDeviceAgent,
} from "rapida-react";
```

## Example

Here is an example of how to use `VoiceAgentContext.Provider` to set up a voice agent:

```tsx
<VoiceAgentContext.Provider
  value={
    new VoiceAgent(
      new ConnectionConfig({
        authorization: YOUR_TOKEN,
      }),
      new AgentConfig(ASSISTANT_ID).addArgument("key", "val")
    )
  }
>
  <ConversationMessages
    userIcon={UserIcon}
    brandIcon={BrandIcon}
    className="h-full overflow-auto !pb-40 no-scrollbar"
    intialConversations={[
      {
        role: "system",
        messages: [
          "I am Yuuki",
          "An AI-powered coach to help you master the toughest challenges at your workplace.",
        ],
      },
    ]}
  />
  <div className="absolute bottom-0 right-0 left-0">
    <MessagingAction
      className="h-[8rem]"
      placeholder="How can I help you overcome a challenge?"
    />
  </div>
</VoiceAgentContext.Provider>
```

## Available Exports

The following components, hooks, and utilities are available for import:

### Types & Configurations

- `Channel`: Defines communication channels.
- `ConnectionState`: Represents the state of a voice agent connection.
- `MediaDeviceFailure`: Handles media device errors.
- `ConnectionConfig`: Configures the connection settings for a voice agent.
- `AgentConfig`: Configures the agent settings, including parameters and keywords.

### Components

- `BrandIcon`: Displays the brand's representative icon.
- `UserIcon`: Displays the user's representative icon.
- `MessagingAction`: A messaging input component for user interactions.
- `ConversationMessages`: Manages and displays the conversation flow.

### Context

- `VoiceAgent`: The core AI voice agent instance.
- `VoiceAgentContext`: Provides the voice agent's context for managing interactions.

### Hooks

- `useConnectAgent`: Establishes a connection to the voice agent.
- `useDisconnectAgent`: Disconnects the agent from the session.
- `useInputModeToggleAgent`: Toggles between different input modes.
- `useMicInputToggleAgent`: Enables or disables microphone input.
- `useSpeakerOuputToggleAgent`: Enables or disables speaker output.
- `useMultiband3DSpeakerTrackVolume`: Adjusts multiband volume for speaker tracks.
- `useMultibandMicrophoneTrackVolume`: Adjusts multiband volume for microphone tracks.
- `useSelectInputDeviceAgent`: Selects and manages input audio devices.

## License

This project is licensed under the MIT License.
