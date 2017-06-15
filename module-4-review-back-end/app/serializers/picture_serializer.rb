class PictureSerializer < ActiveModel::Serializer
  attributes :id, :caption, :link, :created_at
end
