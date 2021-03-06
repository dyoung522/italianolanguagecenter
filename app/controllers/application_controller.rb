class ApplicationController < ActionController::Base
  # include ActionController::Serialization

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery :with => :null_session

  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def index
    @locale = I18n.locale
  end
end
