---
enable: true # Control the visibility of this section across all pages where it is used
title: Genshot **Premium Plans**

plans:
  enable: true
  list:
    # List of available plans. Ensure that these names are used consistently in other places where applicable.
    - selected: true
      label: Monthly # Use this value exactly in all corresponding places below.
    - selected: false
      label: Yearly # Use this value exactly in all corresponding places below.

list:
  # Starter Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Most Popular
    name: Starter # Name of the pricing tier.
    description: Essential AI-powered vulnerability detection for small teams and applications

    price:
      # Pricing details for each plan type.
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 0
        append_value:
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 0
        append_value:

    features:
      - "Launch **unlimited tokens**"
      - "Automated **liquidity pool** setup on 1 chain"
      - "Basic **DEX** integration"

    # usages:
    #   - type: Monthly # Plan type (must match values in the 'plans' section above).
    #     list:
    #       - label: Target Apps
    #         value: 5
    #       - label: Scan Hours
    #         value: 40
    #   - type: Yearly # Plan type (must match values in the 'plans' section above).
    #     list:
    #       - label: Target Apps
    #         value: 5
    #       - label: Scan Hours
    #         value: 480

    cta_btn:
      enable: true
      label: Join waitlist
      url: https://forms.gle/REs1cy1qLQjJR9rMA
      rel:
      target:

  # Pro Plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Most Popular
    name: Pro # Name of the pricing tier.
    description: Advanced AI red teaming with comprehensive threat simulation for growing organizations

    price:
      # Pricing details for each plan type.
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 79
        append_value:
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 790
        append_value:

    features:
      - "Launch **unlimited** tokens"
      - "**Multi-chain** deployment"
      - "Liquidity pool setup on **multiple DEXs**"
      - "Priority AI support & **customization**"

    # usages:
    #   - type: Monthly # Plan type (must match values in the 'plans' section above).
    #     list:
    #       - label: Target Apps
    #         value: 20
    #       - label: Scan Hours
    #         value: 120
    #   - type: Yearly # Plan type (must match values in the 'plans' section above).
    #     list:
    #       - label: Target Apps
    #         value: 20
    #       - label: Scan Hours
    #         value: 1440

    cta_btn:
      enable: true
      label: Coming Soon!
      url: 
      rel:
      target:

  # Enterprise Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Most Popular
    name: Enterprise # Name of the pricing tier.
    description: Complete AI red team solution with custom attack scenarios for large organizations

    price:
      # Empty price section to maintain layout spacing
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: 1,500
        append_value: ""
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        prepend_value: "$"
        value: 15,000
        append_value: ""

    features:
      - "Launch **unlimited tokens**"
      - "**Advanced liquidity** strategies"
      - "Dedicated support and **white-label** options"
      - "**Tailored integrations** for projects & communities"

    # usages:
    #   - type: Monthly # Plan type (must match values in the 'plans' section above).
    #     list:
    #       - label: Target Apps
    #         value: Unlimited
    #       - label: Scan Hours
    #         value: 300
    #   - type: Yearly # Plan type (must match values in the 'plans' section above).
    #     list:
    #       - label: Target Apps
    #         value: Unlimited
    #       - label: Scan Hours
    #         value: 3600

    cta_btn:
      enable: true
      label: Coming Soon!
      url: 
      rel:
      target:

# Pricing Comparison
# comparison:
#   - label: Attack Frameworks
#     list:
#       - value: OWASP Top 10 Testing
#         included:
#           - true # Starter Plan
#           - true # Pro Plan
#           - true # Enterprise Plan
#       - value: MITRE ATT&CK Techniques
#         included:
#           - Basic (50+ techniques) # Starter Plan
#           - Full (300+ techniques) # Pro Plan
#           - Custom + APT scenarios # Enterprise Plan
#       - value: Custom Attack Vectors
#         included:
#           - false # Starter Plan
#           - Limited # Pro Plan
#           - Unlimited # Enterprise Plan
#       - value: Advanced Persistent Threat (APT) Simulation
#         included:
#           - false
#           - false
#           - true

#   - label: Infrastructure Coverage
#     list:
#       - value: Web Applications
#         included:
#           - true # Starter Plan
#           - true # Pro Plan
#           - true # Enterprise Plan
#       - value: API & Microservices Testing
#         included:
#           - false # Starter Plan
#           - true # Pro Plan
#           - true # Enterprise Plan
#       - value: Cloud Infrastructure (AWS/Azure/GCP)
#         included:
#           - false # Starter Plan
#           - Single cloud # Pro Plan
#           - Multi-cloud # Enterprise Plan
#       - value: Network Infrastructure
#         included:
#           - false
#           - Limited
#           - Full coverage

#   - label: Integrations & Reporting
#     list:
#       - value: Basic Security Reports
#         included:
#           - Monthly # Starter Plan
#           - Weekly # Pro Plan
#           - Real-time # Enterprise Plan
#       - value: Slack/Teams Integration
#         included:
#           - false # Starter Plan
#           - true # Pro Plan
#           - true # Enterprise Plan
#       - value: SIEM Integration
#         included:
#           - false # Starter Plan
#           - false # Pro Plan
#           - true # Enterprise Plan
#       - value: Compliance Reports (SOC 2, ISO 27001)
#         included:
#           - false
#           - Basic
#           - Full compliance

#   - label: Support & Services
#     list:
#       - value: Email Support
#         included:
#           - 24-48h response # Starter Plan
#           - 4-8h response # Pro Plan
#           - 24/7 priority # Enterprise Plan
#       - value: Dedicated Security Engineer
#         included:
#           - false # Starter Plan
#           - false # Pro Plan
#           - true # Enterprise Plan
#       - value: Custom Training & Workshops
#         included:
#           - false # Starter Plan
#           - Quarterly # Pro Plan
#           - Monthly # Enterprise Plan
#       - value: On-premise Deployment
#         included:
#           - false
#           - false
#           - Available
---
