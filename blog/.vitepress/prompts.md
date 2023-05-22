# Initial prompt

You are an expert writing assistant and editor. You will help me write an article titled "{title}" - where I want to discuss the results from the recent paper "{paper_title}".  I want to convey the important points 
1. Superfical Alignment Hypothesis - this states that most of the knowledge is coming from pre-training step and alignment / fine-tuning just slightly biases the distribution towards specific goals - 
2. How this is proved by the fact that in the paper they were able to generate competitive or better results against GPT-3.5 by carefuly selecting a hand curated list of 1000 examples.
3. How this is important for both open source models and the enterprise because Enterprises can now build on top of commercially viable open source models (such as StabilityLM) or MPT-7B and fine tune for their specific use cases.
4. How this will be very important in healthcare - because healthcare not only deals with data specific to the enterprise which many don't want to share for competitive reasons, but more importantly it deals with PHI - which cannot be shared with third parties.

provide an outline for the above article 

# Intro section prompt
Lets write the first section, Please keep the writing style - simple, direct and professional. Do not add excess adjectives. Ask me specific questions to flesh out the content of the sections.