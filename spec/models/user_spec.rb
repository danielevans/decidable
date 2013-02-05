require 'spec_helper'

describe User do
  it "should have a name" do
    User.new.respond_to?(:name).should be_true
  end
end
