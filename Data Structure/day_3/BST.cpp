#include <iostream>

using namespace std;

class Node {
    public:
    int val = 0;
    Node* left = nullptr;
    Node* right = nullptr;
    Node(){}
    Node(int data) : val{data}{};
};

class BST {
    Node* root = nullptr;
    public:
    BST(): root{nullptr}{}
    ~BST(){
        
    }
    Node *getRoot(){
        return root;
    } 
    Node * SearchNode(Node*root, int val){
        if(!root)
            return nullptr;
        else if(root->left->val == val || root->right->val == val)
            return root;
        else {
            if(root->val > val)
                return SearchNode(root->left, val);
            else
                return SearchNode(root->right, val);
        }
    }
    Node *GetMaxVal(Node* root){
        if(!root->right){
            return root;
        }
        return GetMaxVal(root->right);
    }
    void InsertNode(Node*& root, Node* newNode) {
        if (root == nullptr) {
            root = newNode;
            return;
        }

        if (newNode->val < root->val)
            InsertNode(root->left, newNode);
        else
            InsertNode(root->right, newNode);
    }
    // void InsertNode(Node* newNode){
    //     if(!root){
    //         root = newNode;
    //         return;
    //     }

    //     Node* leaf = root;
    //     Node* parent = nullptr;

    //     while(leaf){
    //         parent = leaf;
    //         if(newNode->val < leaf->val)
    //             leaf = leaf->left;
    //         else
    //             leaf = leaf->right;
    //     }

    //     if(newNode->val < parent->val)
    //         parent->left = newNode;
    //     else
    //         parent->right = newNode;
    // }
    void TreeTraverse(Node *root){
        if(!root)
            return;
        else{
            TreeTraverse(root->left);
            cout << "this is the node value : " << root->val << endl;
            TreeTraverse(root->right);
        }
    }
    int CountNodes(Node *root){
        if(!root)
            return 0;
        else 
            return CountNodes(root->left) + 1 + CountNodes(root->right);
    }
    int CountLevels(Node *root){
        if(!root)
            return 0;
        return max(CountLevels(root->left),CountLevels(root->right)) + 1;
    }
    void deleteNode(int val){
        if(!root)
            return;
        else {
            Node* foundNode = SearchNode(root,val);
            Node* parent;
            if(foundNode){
                if(!foundNode->left && !foundNode->right)
                    delete foundNode;
                else if(!foundNode->left){
                    Node* tempRight = foundNode->right;
                    foundNode = foundNode->right;
                }
            }
            else {
                cout << "Node not found !" << endl;
                return;
            }
        }
    }
};

int main (){

    return 0;
}