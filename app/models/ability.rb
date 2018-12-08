class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    return if user.id.nil?

    can :access, :rails_admin   # grant access to rails_admin
    can :read, :dashboard       # grant access to the dashboard

    if user.admin?
      can :manage, :all
    elsif user.guest?
      can :read, :all
      # can :manage, User, id: user.id
      # can :manage, Message, user_id: user.id
    end
  end
end
