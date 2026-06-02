# Improvement to Salus: Pre-Execution Media Authentication Layer

## Overview

This project proposes a security enhancement for multimodal AI agents by introducing a **Pre-Execution Media Authentication Layer**. The solution protects AI systems from deepfake voice and video attacks by verifying the authenticity of media inputs before allowing high-risk actions to be executed.

As AI agents increasingly interact through voice and video, traditional guardrails that only validate text transcripts become insufficient. Attackers can use cloned voices or deepfake videos to impersonate legitimate users and trigger unauthorized actions. This project addresses that security gap.

---

## Problem Statement

Current AI guardrails primarily focus on:

* Intent validation
* Policy enforcement
* Action authorization

However, they often assume that incoming audio and video are authentic. This creates a vulnerability where synthetic media can bypass identity verification and execute sensitive actions.

---

## Proposed Solution

The system introduces a dedicated authentication layer that sits between media ingestion and action execution.

### Workflow

Audio/Video Input
→ Media Authentication Layer
→ LLM Processing
→ Guardrail Validation
→ Action Execution

The authentication layer analyzes media for indicators of synthetic generation and assigns an authenticity score.

---

## Technical Approach

### Audio Analysis

The deep learning model examines:

* Frequency patterns
* Temporal consistency
* Breathing characteristics
* Voice-cloning artifacts

### Video Analysis

The model evaluates:

* Lip-sync consistency
* Eye-blink behavior
* Facial micro-expressions
* Frame-level anomalies

### Decision Engine

* High authenticity score → Request proceeds
* Low authenticity score → Request is blocked and logged

---

## Key Features

* Deepfake voice detection
* Deepfake video detection
* Authenticity scoring system
* Real-time validation pipeline
* Low-latency processing
* Suspicious activity quarantine logging
* Seamless integration with existing AI guardrails

---

## Impact

This solution adds a critical security layer for multimodal AI systems by ensuring that the source of a request is authentic before any sensitive action is executed.

The system answers an important question that existing guardrails often miss:

**"Is the person making this request actually real?"**

---

## Future Enhancements

* Continuous authentication during conversations
* Biometric voice verification
* Multi-factor identity validation
* Adaptive risk scoring
* Enterprise-scale monitoring dashboard

---

## Tech Stack

* Python
* Deep Learning
* PyTorch / TensorFlow
* OpenCV
* Librosa
* FastAPI
* React
* Tailwind CSS

---

## Author

**Manvith Balaji**

