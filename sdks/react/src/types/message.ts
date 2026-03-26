/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */

import { Feedback } from "./feedback";

/**
 *
 */
export enum MessageRole {
  // text channel for input and output
  System = "system",

  // audio channel for input and output
  User = "user",
}

/**
 *
 */
export enum MessageStatus {
  /**
   * Pending status for the message
   */
  Pending = "pending",

  /**
   * complete the message
   */
  Complete = "complete",
}

/**
 *
 */
export interface Message {
  /**
   * id of the message
   */
  id: string;

  /**
   * role of the message who had sent it
   */
  role: MessageRole;

  /**
   * list of sentences in the message
   */
  messages: string[];

  /**
   * feedback given to the message
   */
  feedback?: Feedback;

  /**
   *time
   */
  time: Date;

  /**
   *
   */
  status: MessageStatus;
}
