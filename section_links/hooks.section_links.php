<?php

class Hooks_section_links extends Hooks
{
	public function control_panel__add_to_head()
	{
		// only needed on publish pages
		if (URL::getCurrent(false) !== '/publish') {
			return "";
		}

		return $this->css->link('section_links');
	}
	
	
	public function control_panel__add_to_foot()
	{		
		// only needed on publish pages
		if (URL::getCurrent(false) !== '/publish') {
			return "";
		}
		
		return $this->js->link('section_links');
	}
}