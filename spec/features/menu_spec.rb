require 'spec_helper'

feature "user can create a new menu" do
  scenario "by clicking a button" do
    visit root_path
    fill_in('menu_name', :with => 'Breakfast')
    click_on('Add Menu')
    expect(page).to have_content("Breakfast")
  end
end